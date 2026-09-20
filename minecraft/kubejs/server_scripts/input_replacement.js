// priority: 1

ServerEvents.recipes(event => {
    event.replaceInput({output: "gtceu:pump_deck"}, "gtceu:iron_screw", Item.of("gtceu:bronze_screw"))
    event.replaceInput({output: "gtceu:pump_hatch"}, "gtceu:iron_ring", Item.of("gtceu:bronze_ring"))
    event.replaceInput({output: "gtceu:pump_hatch"}, "gtceu:iron_screw", Item.of("gtceu:bronze_screw"))
    event.replaceInput({output: "gtceu:primitive_pump"}, "gtceu:iron_ring", Item.of("gtceu:bronze_ring"))
    event.replaceInput({output: "gtceu:primitive_pump"}, "gtceu:iron_screw", Item.of("gtceu:bronze_screw"))
    event.replaceInput({output: "gtceu:primitive_pump"}, "gtceu:iron_rotor", Item.of("gtceu:bronze_rotor"))
})