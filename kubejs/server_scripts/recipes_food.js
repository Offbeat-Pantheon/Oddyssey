ServerEvents.recipes(e => {
 
// - general 
    e.replaceInput(
         {output: 'farmersdelight:wheat_dough' }, 
                    'minecraft:wheat',           
                    'bountifulfares:flour'         
    ),
 
 
    // - oven recipes  
    e.Shaped(
        Item.of('cookscollection:oven', 1),
        [
            'BBB',
            'ScS',
            'iii'
        ],
        {
            B: 'minecraft:bricks',
            S: 'minecraft:cobblestone',
            c: '#c:coal',
            i: "#c:ingots/iron"
        }
    ),
e.remove ({ id: 'farmersdelight:pie_crust' })
    e.Shaped(
        Item.of('farmersdelight:pie_crust', 3),
        [
            'DMD',
            ' D '
        ],
        {
            D: 'farmersdelight:wheat_dough',
            M: 'c:milk'
        }
    ),

e.remove({ id: 'bountifulfares:melon_pie' }),
e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "minecraft:melon_slice"},
            {"tag": "c:eggs"},
            {"item": "minecraft:sugar"},
            {"item": "farmersdelight:pie_crust"}
  ],
        result: 
            {id: "bountifulfares:melon_pie", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'bountifulfares:apple_pie' }),
e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "minecraft:apple"},
            {"tag": "c:eggs"},
            {"item": "minecraft:sugar"},
            {"item": "farmersdelight:pie_crust"}
  ],
        result: 
            {id: "bountifulfares:apple_pie", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'bountifulfares:orange_pie' }),
e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "bountifulfares:orange"},
            {"tag": "c:eggs"},
            {"item": "minecraft:sugar"},
            {"item": "farmersdelight:pie_crust"}
  ],
        result: 
            {id: "bountifulfares:orange_pie", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'bountifulfares:plum_pie' }),
e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "bountifulfares:plum"},
            {"tag": "c:eggs"},
            {"item": "minecraft:sugar"},
            {"item": "farmersdelight:pie_crust"}
  ],
        result: 
            {id: "bountifulfares:plum_pie", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'bountifulfares:hoary_pie' }),
e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "bountifulfares:hoary_apple"},
            {"tag": "c:eggs"},
            {"item": "minecraft:sugar"},
            {"item": "farmersdelight:pie_crust"}
  ],
        result: 
            {id: "bountifulfares:hoary_pie", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'farmersdelight:chocolate_pie' }),
e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "neapolitan:chocolate_bar"},
            {"tag": "c:milk"},
            {"tag": "c:eggs"},
            {"item": "minecraft:sugar"},
            {"item": "farmersdelight:pie_crust"}
  ],
        result: 
            {id: "farmersdelight:chocolate_pie", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'minecraft:pumpkin_pie' }),
e.remove({ id: 'farmersdelight:pumpkin_pie' }),
e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "farmersdelight:pumpkin_slice"},
            {"tag": "c:milk"},
            {"tag": "c:eggs"},
            {"item": "minecraft:sugar"},
            {"item": "farmersdelight:pie_crust"}
  ],
        result: 
            {id: "minecraft:pumpkin_pie", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'upgrade_aquatic:mulberry_pie' }),
e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "upgrade_aquatic:mulberry"},
            {"tag": "c:milk"},
            {"tag": "c:eggs"},
            {"item": "minecraft:sugar"},
            {"item": "farmersdelight:pie_crust"}
  ],
        result: 
            {id: "upgrade_aquatic:mulberry_pie", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'bountifulfares:passion_fruit_tart' }),
e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "atmospheric:passion_fruit"},
            {"tag": "c:eggs"},
            {"item": "minecraft:sugar"},
            {"item": "farmersdelight:pie_crust"}
  ],
        result: 
            {id: "bountifulfares:passion_fruit_tart", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'bountifulfares:elderberry_tart' }),
e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "bountifulfares:elderberries"},
            {"tag": "c:eggs"},
            {"item": "minecraft:sugar"},
            {"item": "farmersdelight:pie_crust"}
  ],
        result: 
            {id: "bountifulfares:elderberry_tart", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'bountifulfares:glow_berry_tart' }),
e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "minecraft:glowberries"},
            {"tag": "c:eggs"},
            {"item": "minecraft:sugar"},
            {"item": "farmersdelight:pie_crust"}
  ],
        result: 
            {id: "bountifulfares:glow_berry_tart", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'bountifulfares:sweet_berry_tart' }),
e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "minecraft:sweetberries"},
            {"tag": "c:eggs"},
            {"item": "minecraft:sugar"},
            {"item": "farmersdelight:pie_crust"}
  ],
        result: 
            {id: "bountifulfares:sweet_berry_tart", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'bountifulfares:lapisberry_tart' }),
e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "bountifulfares:lapisberries"},
            {"tag": "c:eggs"},
            {"item": "minecraft:sugar"},
            {"item": "farmersdelight:pie_crust"}
  ],
        result: 
            {id: "bountifulfares:lapisberry_tart", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'minecraft:cake' }),
e.custom({
        type: "cookscollection:baking_shaped",
        pattern: [
            "AAA",
            "BEB",
            "CCC"
        ],
        key: {
          "A": {
            "tag": "c:milk"
          },
          "B": {
            "item": "minecraft:sugar"
          },
          "C": {
            "item": "bountifulfares:flour"
          },
          "E": {
            "tag": "c:eggs"
          }
        },
        result: 
            {id: "minecraft:cake", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'minecraft:cake' }),
e.remove({ id: 'farmersdelight:cake_from_milk_bottle' }),
e.remove({ id: 'neapolitan:cake' }),
e.custom({
        type: "cookscollection:baking_shaped",
        pattern: [
            "AAA",
            "BEB",
            "CCC"
        ],
        key: {
          "A": {
            "tag": "c:milk"
          },
          "B": {
            "item": "minecraft:sugar"
          },
          "C": {
            "item": "bountifulfares:flour"
          },
          "E": {
            "tag": "c:eggs"
          }
        },
        result: 
            {id: "minecraft:cake", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'neapolitan:vanilla_cake' }),
e.custom({
        type: "cookscollection:baking_shaped",
        pattern: [
            "AVA",
            "BEB",
            "CVC"
        ],
        key: {
          "A": {
            "tag": "c:milk"
          },
          "B": {
            "item": "minecraft:sugar"
          },
          "C": {
            "item": "bountifulfares:flour"
          },
          "V": {
            "item": "neapolitan:dried_vanilla_pods"
          },
          "E": {
            "tag": "c:eggs"
          }
        },
        result: 
            {id: "neapolitan:vanilla_cake", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'neapolitan:chocolate_cake' }),
e.custom({
        type: "cookscollection:baking_shaped",
        pattern: [
            "AVA",
            "BEB",
            "CVC"
        ],
        key: {
          "A": {
            "tag": "c:milk"
          },
          "B": {
            "item": "minecraft:sugar"
          },
          "C": {
            "item": "bountifulfares:flour"
          },
          "V": {
            "item": "neapolitan:chocolate_bar"
          },
          "E": {
            "tag": "c:eggs"
          }
        },
        result: 
            {id: "neapolitan:chocolate_cake", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'neapolitan:strawberry_cake' }),
e.custom({
        type: "cookscollection:baking_shaped",
        pattern: [
            "AVA",
            "BEB",
            "CVC"
        ],
        key: {
          "A": {
            "tag": "c:milk"
          },
          "B": {
            "item": "minecraft:sugar"
          },
          "C": {
            "item": "bountifulfares:flour"
          },
          "V": {
            "item": "neapolitan:strawberries"
          },
          "E": {
            "tag": "c:eggs"
          }
        },
        result: 
            {id: "neapolitan:strawberry_cake", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'neapolitan:banana_cake' }),
e.custom({
        type: "cookscollection:baking_shaped",
        pattern: [
            "AVA",
            "BEB",
            "CVC"
        ],
        key: {
          "A": {
            "tag": "c:milk"
          },
          "B": {
            "item": "minecraft:sugar"
          },
          "C": {
            "item": "bountifulfares:flour"
          },
          "V": {
            "item": "neapolitan:banana"
          },
          "E": {
            "tag": "c:eggs"
          }
        },
        result: 
            {id: "neapolitan:banana_cake", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'neapolitan:mint_cake' }),
e.custom({
        type: "cookscollection:baking_shaped",
        pattern: [
            "AVA",
            "BEB",
            "CVC"
        ],
        key: {
          "A": {
            "tag": "c:milk"
          },
          "B": {
            "item": "minecraft:sugar"
          },
          "C": {
            "item": "bountifulfares:flour"
          },
          "V": {
            "item": "neapolitan:mint_leaves"
          },
          "E": {
            "tag": "c:eggs"
          }
        },
        result: 
            {id: "neapolitan:mint_cake", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'neapolitan:adzuki_cake' }),
e.custom({
        type: "cookscollection:baking_shaped",
        pattern: [
            "AVA",
            "BEB",
            "CVC"
        ],
        key: {
          "A": {
            "tag": "c:milk"
          },
          "B": {
            "item": "minecraft:sugar"
          },
          "C": {
            "item": "bountifulfares:flour"
          },
          "V": {
            "item": "neapolitan:roasted_adzuki_beans"
          },
          "E": {
            "tag": "c:eggs"
          }
        },
        result: 
            {id: "neapolitan:adzuki_cake", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'nomansland:food/fruit_cake' }),
e.custom({
        type: "cookscollection:baking_shaped",
        pattern: [
            "XYZ",
            "AEA",
            "CCC"
        ],
        key: {
          "A": {
            "tag": "c:milk"
          },
          "E": {
            "tag": "c:eggs"
          },
          "C": {
            "item": "bountifulfares:flour"
          },
          "X": {
            "item": "minecraft:apple"
          },
          "Y": {
            "item": "minecraft:sweet_berries"
          },
          "Z": {
            "item": "nomansland:pear"
          },
          
        },
        result: 
            {id: "nomansland:fruit_cake", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'bountifulfares:coconut_cake' }),
e.custom({
        type: "cookscollection:baking_shaped",
        pattern: [
            "VAV",
            "BEB",
            "CCC"
        ],
        key: {
          "A": {
            "tag": "c:milk"
          },
          "B": {
            "item": "minecraft:sugar"
          },
          "C": {
            "item": "bountifulfares:flour"
          },
          "V": {
            "item": "bountifulfares:coconut_half"
          },
          "E": {
            "tag": "c:eggs"
          }
        },
        result: 
            {id: "bountifulfares:coconut_cake", count: 1},
        cookingtime: 200
}),

e.remove({ id: 'bountifulfares:sponge_cake' }),
e.custom({
        type: "cookscollection:baking_shaped",
        pattern: [
            "AAA",
            "BEB",
            "VVV"
        ],
        key: {
          "A": {
            "tag": "c:buckets/water"
          },
          "B": {
            "item": "minecraft:sugar"
          },
          "V": {
            "item": "bountifulfares:spongekin_slice"
          },
          "E": {
            "tag": "c:eggs"
          }
        },
        result: 
            {id: "bountifulfares:sponge_cake", count: 1},
        cookingtime: 200
}),
    e.remove({ id: 'minecraft:bread'}),
    e.remove({ id: 'farmersdelight:bread_from_smoking'}),
    e.remove({ id: 'farmersdelight:bread_from_smelting'}),
    e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "farmersdelight:wheat_dough"},
            {"item": "farmersdelight:wheat_dough"},
            {"item": "farmersdelight:wheat_dough"}
  ],
        result: 
            {id: "minecraft:bread", count: 3},
        cookingtime: 200
}),

    e.remove({ id: 'architects_palette:bread_block'}),
    e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "farmersdelight:wheat_dough"},
            {"item": "farmersdelight:wheat_dough"},
            {"item": "farmersdelight:wheat_dough"},
            {"item": "farmersdelight:wheat_dough"},
            {"item": "farmersdelight:wheat_dough"},
            {"item": "farmersdelight:wheat_dough"},
            {"item": "farmersdelight:wheat_dough"},
            {"item": "farmersdelight:wheat_dough"},
            {"item": "farmersdelight:wheat_dough"},
  ],
        result: 
            {id: "architects_palette:bread_block", count: 9},
        cookingtime: 200
}),

    e.remove({ id: 'neapolitan:banana_bread'}),
    e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "neapolitan:banana"},
            {"item": "minecraft:sugar"},
            {"tag": "c:eggs"},
            {"item": "bountifulfares:flour"}
  ],
        result: 
            {id: "neapolitan:banana_bread", count: 3},
        cookingtime: 200
}),

    e.remove({ id: 'bountifulfares:maize_bread'}),
    e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "bountifulfares:maize"},
            {"item": "minecraft:sugar"},
            {"tag": "c:eggs"},
            {"tag": "c:milk"},
            {"item": "bountifulfares:flour"}
  ],
        result: 
            {id: "bountifulfares:maize_bread", count: 3},
        cookingtime: 200
}),

    e.remove({ id: 'bountifulfares:artisan_bread'}),
    e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "bountifulfares:flour"},
            {"item": "bountifulfares:flour"},
            {"item": "minecraft:sugar"},
            {"tag": "c:eggs"},
            {"tag": "c:milk"},
  ],
        result: 
            {id: "bountifulfares:artisan_bread", count: 1},
        cookingtime: 200
}),

    e.remove({ id: 'abundant_atmosphere:squashberry_bread'}),
    e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "bountifulfares:flour"},
            {"item": "bountifulfares:flour"},
            {"item": "abundant_atmosphere:squashberry_jam"},
            {"tag": "c:eggs"},
  ],
        result: 
            {id: "abundant_atmosphere:squashberry_bread", count: 1},
        cookingtime: 200
}),
    e.remove({ id: 'autumnity:pumpkin_bread'}),
    e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "bountifulfares:flour"},
            {"item": "bountifulfares:flour"},
            {"item": "farmersdelight:pumpkin_slice"},
            {"item": "nomansland:maple_syrup_bottle"},
  ],
        result: 
            {id: "autumnity:pumpkin_bread", count: 1},
        cookingtime: 200
}),

    // - gritsmill recipes
    e.remove({ id: 'bountifulfares:walnut_mulch_from_walnut_milling'}),
    e.custom({
        type: "bountifulfares:milling",
        ingredient: 
        {item: "nomansland:walnuts"},
        result: 
        {id: "bountifulfares:walnut_mulch"},
        result_count: 1
}),


// - clay pot
    e.replaceInput(
         {output: 'minersdelight:copper_pot' }, 
                    'minecraft:copper_ingot',           
                    'minecraft:brick'         
    ),
    e.replaceInput(
         {output: 'minersdelight:copper_cup' }, 
                    'minecraft:copper_ingot',           
                    'minecraft:brick'         
    ),
    e.remove({ id: 'farmersdelight:bread_from_smoking'})



})