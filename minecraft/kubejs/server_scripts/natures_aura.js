// priority: 0

ServerEvents.recipes(event => {
    event.recipes.naturesaura.tree_ritual(
        Item.of("gtceu:rubber_sapling"),
        [Item.of("gtceu:steel_ingot"), Item.of("gtceu:bronze_ingot"), Item.of("gtceu:steel_ingot"), Item.of("gtceu:bronze_ingot")]
    )

    event.recipes.naturesaura.altar(
        Item.of("projecte:high_covalence_dust"),
        Item.of("kubejs:compact_medium_covalence_dust_ball")
    )

    event.recipes.naturesaura.tree_ritual(
        Item.of("botania:fertilizer"),
        [
            Item.of("projecte:high_covalence_dust"), Item.of("projecte:high_covalence_dust"), Item.of("projecte:high_covalence_dust"), 
            Item.of("projecte:high_covalence_dust"), Ingredient.of("#forge:dyes"), Ingredient.of("#forge:dyes"), 
            Ingredient.of("#forge:dyes"), Ingredient.of("#forge:dyes")
        ]
    )
})