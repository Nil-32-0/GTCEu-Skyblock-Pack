// priority: 0

ServerEvents.recipes(event => {
    const smallCompress = (input, result) => {event.shaped(result, ['AA', 'AA'], {A: input})}
    const largeCompress = (input, result) => {event.shaped(result, ['AAA', 'AAA', 'AAA'], {A: input})}
    const simpleShapeless = (input, result) => {event.shapeless(result, [input])}

    smallCompress("minecraft:snowball", Item.of("minecraft:snow_block"))
    smallCompress("botania:pebble", Item.of("minecraft:cobblestone"))
    
    largeCompress("projecte:low_covalence_dust", Item.of("kubejs:low_covalence_dust_block"))
    simpleShapeless("kubejs:low_covalence_dust_block", Item.of("projecte:low_covalence_dust", 9))
    largeCompress("projecte:medium_covalence_dust", Item.of("kubejs:medium_covalence_dust_block"))
    simpleShapeless("kubejs:medium_covalence_dust_block", Item.of("projecte:medium_covalence_dust", 9))
    largeCompress("projecte:high_covalence_dust", Item.of("kubejs:high_covalence_dust_block"))
    simpleShapeless("kubejs:high_covalence_dust_block", Item.of("projecte:high_covalence_dust", 9))

    event.shaped(
        Item.of("kubejs:stone_hammer"),
        [
            ' C ',
            ' SC',
            'S  '
        ],
        {
            S: "minecraft:stick",
            C: "compressium:cobblestone_1"
        }
    )

    event.shaped(
        Item.of("gtceu:brick_wooden_form"),
        ['K ', ' P'],
        {
            K: "#forge:tools/knives",
            P: "#minecraft:planks"
        }
    )

    event.shapeless(
        Item.of("gtceu:small_redstone_dust"),
        ['minecraft:red_dye', '8x projecte:low_covalence_dust']
    )


})