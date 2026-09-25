// priority: 0

// This file should be used only for recipes that are intended to be replaced at some later point
ServerEvents.recipes(event => {
    event.remove({id: "botania:fertilizer_dye"})
    event.shapeless(
        Item.of("botania:fertilizer"),
        ['projecte:high_covalence_dust', '#forge:dyes', '#forge:dyes', '#forge:dyes', '#forge:dyes']
    )
    event.replaceInput({output: "bloodmagic:altar"}, "minecraft:furnace", Item.of("naturesaura:nature_altar"))
    event.replaceInput({output: "mysticalagriculture:infusion_altar"}, "minecraft:red_wool", Item.of("naturesaura:nature_altar"))

    event.remove({id: "minecraft:enchanting_table"})
    event.shaped(
        Item.of("minecraft:enchanting_table"),
        [
            ' B ',
            'DAD',
            'OOO'
        ],
        {
            A: "naturesaura:nature_altar",
            B: "minecraft:book",
            D: "minecraft:diamond",
            O: "minecraft:obsidian"
        }
    )
})