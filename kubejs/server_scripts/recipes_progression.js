ServerEvents.recipes(e => {

    // - Foundry stuff
    e.shaped('custommachinery:foundry[custommachinery:machine="custommachinery:foundry"]'), [
        'DDD',
        'DFD',
        'DDD'
    ], {
        'D': 'minecraft:cobbled_deepslate',
        'F': 'minecraft:furnace'
    }

    e.remove({ id: 'minecraft:furnace'})
    e.shaped('minecraft:furnace',) 
        [
            'SSS',
            'SCS', 
            'SSS'
        ],
    {
        S: '#minecraft:stone_tool_materials',
        C: '#c:coal'

    }
})