// priority: 0

// This file should be used only for recipes that are intended to be replaced at some later point
ServerEvents.recipes(event => {
    event.remove({id: "botania:fertilizer_dye"})
    event.remove({output: "bloodmagic:altar"})
    event.remove({output: "mysticalagriculture:infusion_altar"})
    event.remove({id: "minecraft:enchanting_table"})

    event.shaped(
        Item.of("minecraft:enchanting_table"),
        [
            ' C ',
            'DAD',
            'OOO'
        ],
        {
            A: "naturesaura:nature_altar",
            C: "gtceu:basic_electronic_circuit",
            D: "minecraft:diamond",
            O: "minecraft:obsidian"
        }
    )
    event.shaped(
        Item.of("bloodmagic:altar"),
        [
            'SCS',
            'SAS',
            'GGG'
        ],
        {
            A: "naturesaura:nature_altar",
            C: "gtceu:basic_electronic_circuit",
            G: "minecraft:gold_ingot",
            S: "#forge:stone"
        }
    )
    event.shaped(
        Item.of("mysticalagriculture:infusion_altar"),
        [
            'GAG',
            'CSC',
            'SSS'
        ],
        {
            A: "naturesaura:nature_altar",
            C: "gtceu:basic_electronic_circuit",
            G: "minecraft:gold_ingot",
            S: "#forge:stone"
        }
    )

    mystical_flower_types.forEach(type => {
        event.custom({
            type: "bloodmagic:altar",
            altarSyphon: 100,
            consumptionRate: 5,
            drainRate: 10,
            input: Item.of("kubejs:inert_" + type + "_petal"),
            output: Item.of("botania:" + type + "_petal"),
            upgradeLevel: 0
        })
    })
})