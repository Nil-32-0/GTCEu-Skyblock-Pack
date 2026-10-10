// priority: 0

StartupEvents.registry("item", event => {
    event.create("stone_hammer", "pickaxe").tier("stone").unstackable().maxDamage(262).tag("forge:tools/hammers")
    event.create("unstable_redstone")

    event.create("apple_mush")
    event.create("sapless_rubber_sapling").texture("gtceu:block/rubber_sapling")
    event.create("compact_medium_covalence_dust_ball")

    mystical_flower_types.forEach(type => {
        event.create("kubejs:inert_" + type + "_petal").texture("kubejs:item/petal/inert_" + type + "_petal");
    })
})