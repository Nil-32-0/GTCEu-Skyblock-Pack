// priority: 0

ServerEvents.recipes(event => {
    event.recipes.naturesaura.tree_ritual(
        Item.of("gtceu:rubber_sapling"),
        [Item.of("gtceu:steel_ingot"), Item.of("gtceu:bronze_ingot"), Item.of("gtceu:steel_ingot"), Item.of("gtceu:bronze_ingot")]
    )
})