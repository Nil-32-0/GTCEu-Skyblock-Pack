// priority: 0

StartupEvents.registry("block", event => {
    event.create("low_covalence_dust_block")
    event.create("medium_covalence_dust_block")
    event.create("high_covalence_dust_block")
})