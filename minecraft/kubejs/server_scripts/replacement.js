// priority: 1

ServerEvents.recipes(event => {
    event.replaceInput({output: "cobblefordays:tier_2"}, "minecraft:glass", Item.of("cobblefordays:tier_1"))
    event.replaceInput({output: "cobblefordays:tier_3"}, "minecraft:glass", Item.of("cobblefordays:tier_2"))
    event.replaceInput({output: "cobblefordays:tier_4"}, "minecraft:glass", Item.of("cobblefordays:tier_3"))
    event.replaceInput({output: "cobblefordays:tier_5"}, "minecraft:glass", Item.of("cobblefordays:tier_4"))

    event.replaceInput({output: "gtceu:bronze_large_boiler"}, "#gtceu:circuits/lv", Item.of("gtceu:vacuum_tube"))
})