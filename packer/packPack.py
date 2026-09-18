import aiohttp
import asyncio
import configparser
import hashlib
import json
import os
import pathlib
import tomllib
import urllib.request
import zipfile

files = []

async def parse_toml(toml_filename, zip_file):
    toml_filepath = "mods/.index/" + toml_filename
    with open(toml_filepath, "rb") as file:
        toml = tomllib.load(file)
    if toml is not None:
        if toml['download']['mode'] == 'url':
            vals = {}
            if (toml['side'] == "client"):
                vals['env'] = {"client": "required", "server": "unsupported"}
                print("Client only mod: " + toml['name'])
            if (toml['side'] == "server"):
                vals['env'] = {"client": "optional", "server": "required"}
                print("Server only mod: " + toml['name'])
            vals['path'] = "mods/" + toml['filename']
            download_info = toml['download']
            vals['downloads'] = [download_info['url']]
            fileInfo = await calc_mod_hashes(download_info['url'])
            print("Hash calculated for " + toml['filename'])
            vals['hashes'] = {"sha1": fileInfo['sha1'], "sha512": fileInfo['sha512']}
            vals['fileSize'] = fileInfo['filesize']

            files.append(vals)
        elif toml['download']['mode'] == 'metadata:curseforge':
            path, response = urllib.request.urlretrieve("https://www.curseforge.com/api/v1/mods/" + str(toml['update']['curseforge']['project-id']) + "/files/" + str(toml['update']['curseforge']['file-id']) + "/download")
            with open(path, "rb") as f:
                sha1 = hashlib.sha1()
                while 1:
                    read_bytes = f.read(1024)
                    sha1.update(read_bytes)
                    if not read_bytes:
                        break
            if sha1.hexdigest() != toml['download']['hash']:
                print("Invalid hash for: " + toml['name'])
                return
            zip_file.write(path, "overrides/mods/" + toml['filename'])
        elif toml['download']['mode'] == 'github':
            path, response = urllib.request.urlretrieve(toml['download']['url'])
            zip_file.write(path, "overrides/mods/" + toml['filename'])


async def calc_mod_hashes(mod_url):
    sha_1 = hashlib.sha1()
    sha_512 = hashlib.sha512()
    filesize = 0
    async with aiohttp.ClientSession() as session:
        async with session.get(mod_url) as response:
            while True:    
                read_bytes = await response.content.read()
                if not read_bytes:
                    break
                filesize += len(read_bytes)
                sha_1.update(read_bytes)
                sha_512.update(read_bytes)

    return {
        "sha1": sha_1.hexdigest(),
        "sha512": sha_512.hexdigest(),
        "filesize": filesize
    }

async def get_mod_info(zip_file):
    mod_tomls = [parse_toml(file, zip_file) for file in os.listdir("mods/.index")]
    await asyncio.gather(*mod_tomls)

os.chdir("..")
with open("mmc-pack.json", "r") as file:
    deps = json.load(file)
dependencies = {}
for entry in deps['components']:
    match (entry['cachedName']):
        case "Minecraft":
            dependencies['minecraft'] = str(entry['version'])
        case "Forge":
            dependencies['forge'] = str(entry['version'])
        case "NeoForge":
            dependencies['neoforge'] = str(entry['version'])
parser = configparser.RawConfigParser()
parser.read("pack.cfg")
ver = parser.get("General", "Version")
name = parser.get("General", "Name")

zip_file = zipfile.ZipFile(name + ".mrpack", 'w')
os.chdir("minecraft")

asyncio.run(get_mod_info(zip_file))

for file in os.listdir("."):
    if os.path.isdir(file) and file != "mods":
        for root, dirs, filelist in os.walk(file):
            for file in filelist:
                zip_file.write(root + "/" + file, "overrides/" + root + "/" + file)

json_vals = {}
json_vals['formatVersion'] = 1
json_vals['game'] = "minecraft"
json_vals['versionId'] = str(ver)
json_vals['name'] = name
json_vals['files'] = files
json_vals['dependencies'] = dependencies

zip_file.writestr("modrinth.index.json", json.dumps(json_vals))
zip_file.close()