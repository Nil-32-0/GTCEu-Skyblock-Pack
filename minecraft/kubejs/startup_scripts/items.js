// priority: 0

StartupEvents.registry("item", event => {
    event.create("stone_hammer", "pickaxe").tier("stone").unstackable().maxDamage(262).tag("forge:tools/hammers")
    event.create("unstable_redstone")

    event.create("apple_mush")
    event.create("sapless_rubber_sapling").texture("gtceu:block/rubber_sapling")
})