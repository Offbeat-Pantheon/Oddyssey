ServerEvents.recipes(e => {
    e.shaped(
            Item.of('kubejs:firestarter_sigil', 1),
            [
                'SSS',
                'SCS',
                'SSS'
            ],
            {
                R: 'rubinated_nether:ruby',
                S: 'kubejs:ethereal_sigil',
            }
        )





// - applying sigils 

  e.custom({
    type: "lychee:anvil_crafting",
    item_in: [
      {
        item: "minecraft:elytra"
      },
      {
        item: "kubejs:firestarter_sigil"
      }
    ],
     item_out: {
      id: "minecraft:elytra",
      components: {
        "minecraft:enchantments": 
            {
            "aileron:smokestack": 3
            }
    }
    },
    level_cost: 2,
    post: "prevent_default"
})



})