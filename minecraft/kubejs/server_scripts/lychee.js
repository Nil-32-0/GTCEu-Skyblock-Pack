// priority: 0

const LycheeBuilder = {
    data: {},
    
    initialize(type) {
        this.data.type = type
        return this
    },

    setItem(item) {
        this.data.item_in = item
        return this
    },

    setBlock(block) {
        this.data.block_in = block
        return this
    },

    setPost(post) {
        this.data.post = post
        return this
    },

    build() {
        return this.data
    }
}

ServerEvents.recipes(event => {
    const replaceBlock = {type: "place", block: "air"}
    const damageItem = dmg => {return {type: "damage_item", damage: dmg}}
    const dropItem = (item, count) => {return {type: "drop_item", item: item, count: count}}

    
    event.custom(LycheeBuilder.initialize("lychee:block_interacting").setItem({item: "air"})
        .setBlock("minecraft:grass_block").setPost([dropItem("botania:pebble", 1)]).build()
    )
    event.custom(LycheeBuilder.initialize("lychee:block_interacting").setItem({item: "minecraft:torch"})
        .setBlock("minecraft:snow_block").setPost([{type: "prevent_default"}, {type: "place", block: "minecraft:water"}]).build()
    )

    event.custom(LycheeBuilder.initialize("lychee:block_interacting").setItem({tag: "forge:tools/hammers"})
        .setBlock("minecraft:cobblestone").setPost([replaceBlock, damageItem(1), dropItem("minecraft:gravel", 2)]).build()
    )
    event.custom(LycheeBuilder.initialize("lychee:block_interacting").setItem({tag: "forge:tools/hammers"})
        .setBlock("compressium:cobblestone_1").setPost([replaceBlock, damageItem(1), dropItem("compressium:gravel_1", 2)]).build()
    )
    event.custom(LycheeBuilder.initialize("lychee:block_interacting").setItem({tag: "forge:tools/hammers"})
        .setBlock("minecraft:gravel").setPost([replaceBlock, damageItem(1), dropItem("minecraft:sand", 2)]).build()
    )
    event.custom(LycheeBuilder.initialize("lychee:block_interacting").setItem({tag: "forge:tools/hammers"})
        .setBlock("compressium:gravel_1").setPost([replaceBlock, damageItem(1), dropItem("compressium:sand_1", 2)]).build()
    )
    
    event.custom(LycheeBuilder.initialize("lychee:item_inside").setItem({item: "minecraft:sand"})
        .setBlock("minecraft:water").setPost([replaceBlock, dropItem("minecraft:clay", 1)]).build()
    )
    event.custom(LycheeBuilder.initialize("lychee:item_inside").setItem({item: "compressium:sand_1"})
        .setBlock("minecraft:water").setPost([replaceBlock, dropItem("compressium:clay_1", 1)]).build()
    )

    event.custom(LycheeBuilder.initialize("lychee:block_interacting").setItem({item: "projecte:low_covalence_dust"})
        .setBlock("minecraft:gravel").setPost([replaceBlock, dropItem("gtceu:small_tin_dust", 1)]).build()
    )
    event.custom(LycheeBuilder.initialize("lychee:block_interacting").setItem({item: "kubejs:low_covalence_dust_block"})
        .setBlock("compressium:gravel_1").setPost([replaceBlock, dropItem("gtceu:small_tin_dust", 9)]).build()
    )
    event.custom(LycheeBuilder.initialize("lychee:block_interacting").setItem({item: "projecte:low_covalence_dust"})
        .setBlock("minecraft:sand").setPost([replaceBlock, dropItem("gtceu:small_copper_dust", 1)]).build()
    )
    event.custom(LycheeBuilder.initialize("lychee:block_interacting").setItem({item: "kubejs:low_covalence_dust_block"})
        .setBlock("compressium:sand_1").setPost([replaceBlock, dropItem("gtceu:small_copper_dust", 9)]).build()
    )
    event.custom(LycheeBuilder.initialize("lychee:block_interacting").setItem({item: "projecte:medium_covalence_dust"})
        .setBlock("minecraft:gravel").setPost([replaceBlock, dropItem("gtceu:small_iron_dust", 1)]).build()
    )
    event.custom(LycheeBuilder.initialize("lychee:block_interacting").setItem({item: "kubejs:medium_covalence_dust_block"})
        .setBlock("compressium:gravel_1").setPost([replaceBlock, dropItem("gtceu:small_iron_dust", 9)]).build()
    )
    event.custom(LycheeBuilder.initialize("lychee:block_interacting").setItem({item: "projecte:medium_covalence_dust"})
        .setBlock("minecraft:sand").setPost([replaceBlock, dropItem("gtceu:small_gold_dust", 1)]).build()
    )
    event.custom(LycheeBuilder.initialize("lychee:block_interacting").setItem({item: "kubejs:medium_covalence_dust_block"})
        .setBlock("compressium:sand_1").setPost([replaceBlock, dropItem("gtceu:small_gold_dust", 9)]).build()
    )

    event.custom(LycheeBuilder.initialize("lychee:block_interacting").setItem({item: "minecraft:redstone"})
        .setBlock("kubejs:low_covalence_dust_block").setPost([replaceBlock, dropItem("kubejs:unstable_redstone", 1)]).build()
    )
    event.custom(LycheeBuilder.initialize("lychee:item_inside").setItem({item: "kubejs:unstable_redstone"})
        .setBlock("minecraft:water").setPost([{type: "place", block: "minecraft:lava"}]).build()
    )
})