// priority: 99

ServerEvents.recipes(event => {
    event.remove({id: "naturesaura:gold_powder"})
    event.remove({output: "prettypipes:pipe"})
    event.remove({output: "ppfluids:fluid_pipe"})
})