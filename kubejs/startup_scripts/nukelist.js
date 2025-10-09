 global.nukelist = [ 
    'minecraft:brewing_stand',
    'minecraft:enchanted_book',
    'minecraft:eye_of_ender',
    'minecraft:enchanting_table',
    'arts_and_crafts:pottery_sherd',
    'arts_and_crafts:finale_pottery_sherd',
    'atmospheric:passion_vine',
    'atmospheric:passion_vine_coil',
    'atmospheric:passion_vine_bundle',
    'autumnity:sap_bottle',
    'autumnity:syrup_bottle',
    'autumnity:pancake',
    'autumnity:autumn_crocus',
    'brewinandchewin:quiche_slice',
    'bountifulfares:wild_wheat',
    'bountifulfares:wild_carrots',
    'bountifulfares:wild_potatoes',
    'bountifulfares:wild_beetroots',
    'bountifulfares:grassy_dirt',
    'brewinandchewin:mead',
    'cookscollection:chocolate_muffin',
    'cookscollection:lemon_muffin',
    'cookscollection:lemon',
    'cookscollection:lemon_crate',
    'cookscollection:lemon_sapling',
    'cookscollection:lemon_log',
    'cookscollection:lemon_wood',
    'cookscollection:lemon_leaves',
    'cookscollection:fruiting_lemon_leaves',
    'cookscollection:rustic_loaf',
    'cookscollection:rustic_loaf_slice',
    'cold_sweat:soul_sprout',
    'cold_sweat:soulspring_lantern',
    'nomansland:pear_cobbler_slice',
    'nomansland:spruce_bookshelf',
    'nomansland:birch_bookshelf',
    'nomansland:jungle_bookshelf',
    'nomansland:dark_oak_bookshelf',
    'nomansland:acacia_bookshelf',
    'nomansland:mangrove_bookshelf',
    'nomansland:cherry_bookshelf',
    'nomansland:warped_bookshelf',
    'nomansland:crimson_bookshelf',
    'nomansland:bamboo_bookshelf',
    'nomansland:sweet_tart',
    'nomansland:maple_tart',
    'farmersdelight:rope',
    'farmersdelight:apple_pie',
    'farmersdelight:apple_pie_slice',
    'farmersdelight:chocolate_pie_slice',
    'farmersdelight:cake_slice',
    'farmersdelight:sweet_berry_cheesecake_slice',
    'farmersdelight:sweet_berry_cheesecake',
    "supplementaries:candy",
    "sweety_garden:cyan_poppy",
    "sweety_garden:heather",
    "sweety_garden:busy_lizzie",
    "sweety_garden:hepatica",
    "sweety_garden:wood_anemone",
    "sweety_garden:wood_sorrel",
    "sweety_garden:passion_flower",
    "primal:straw_bale",
    "primal:seashells",
    "piglinproliferation:stone_fire_ring",
    "wan_ancient_beast:suspicious_red_sand",
    "wan_ancient_beast:suspicious_ice",
    "wan_ancient_beast:chisel",
    "wan_ancient_beast:quick_sand_bucket",
    "wan_ancient_beast:quick_red_sand_bucket",
    /arts_and_crafts.*shingle/,
    /arts_and_crafts.*mud/,
    /arts_and_crafts.*paintbrush/,
    /wan_ancient_beast.*straw/,
    /wan_ancient_beast.*skull/,
    /wan_ancient_beast.*meat/,
    /blockbox.*copper/,
    /blockbox.*iron/,
    /blockbox.*gold/,
    /blockbox.*lapis/,
    /blockbox.*granite/,
    /blockbox.*diorite/,
    /blockbox.*andesite/,
    /blockbox.*sandstone/,
    /blockbox.*ice/,
    /blockbox.*snow/,
    /minecraft.*wooden/,

    // - woodtypes
    'nomansland:walnut_log',
    'nomansland:walnut_wood',
    'nomansland:stripped_walnut_log',
    'nomansland:stripped_walnut_wood',
    'nomansland:walnut_leaves',
    'bountifulfares:walnut',
    'bountifulfares:walnut_sapling',
    'bountifulfares:plum_log',
    'bountifulfares:plum_wood',
    'bountifulfares:stripped_plum_log',
    'bountifulfares:stripped_plum_wood',
    /autumnity.*maple/,
    /atmospheric.*laurel/,
    /architects_palette.*twisted/,
    /enderscape.*celestial/,
    /enderscape.*murublight/,
    /environmental.*pine/,

    // - architect's palette
    /architects_palette.*moonshale/,
    /architects_palette.*tread_plate/,
    /architects_palette.*hazard/,
    /architects_palette.*olivestone/,
    /architects_palette.*algal/,
    /architects_palette.*ore_brick/,
    /architects_palette.*osseous/,
    /architects_palette.*board/,
    /architects_palette.*railing/,
    /architects_palette.*dripstone/,
    /architects_palette.*calcite/,
    /architects_palette.*tuff/,
    /architects_palette.*nether_brass/,
    /architects_palette.*wardstone/,
    /architects_palette.*cage_lantern/,
    /architects_palette.*ice/,









    // - nether stuff


    // - end stuff
    /veradite/,
    /mirestone/,
    /end_stone/,
    /kurodite/,
    /chorus/,


// I like to separate the different things by registry type, so below could be the fluid section

    'examplemod:examplefluidid', // Last option can end with a comma

]
const woodenBlocks = [
  'slab', 'stairs', 'fence', 'fence_gate', 'button', 'pressure_plate',
  'chest_boat', 'boat', 'trapdoor', 'door', 'planks',
]
for (const type of woodenBlocks) {
  global.nukelist.push(`bountifulfares:walnut_${type}`)
}


// /ecologics.*flowering_azalea/,  Will remove everything with an ID containing "ecologics" and "flowering_azalea", effectively nuking the Ecologics Flowering Azalea woodtype. The .* seperates the 2 bits.
// /minecraft.*acacia/,  Will remove everything with an ID containing "minecraft" and "acacia", effectively nuking the Vanilla Acacia woodtype.
// /acacia/, // You don't need the modid at all actually, it's just useful in case you have 2 woodtypes with the same name from different mods (e.g ecologics:azalea and quark:azalea) and you only want to remove one.
// /quark.*limestone/,  Just for fun, you can nuke everything from Quark that contains "limestone" in the ID 
// CAUTION: This can end up removing things you don't want to accidentally. For example, if you wanted to remove Lead (the metal) from your modpack, and put in /lead/, it will remove Minecraft Leads as well because their ID is minecraft:lead. Be careful!

/*for (const colour of dyeColours) {
    global.nukelist.push(`examplefurnituremod:${colour}_coloured_thing`)
    global.nukelist.push(`examplefurnituremod:${colour}_coloured_second_thing`) 
}*/

// Below would nuke all coloured_third_thing in every colour except for blue
/*for (const colour of dyeColours) {
    if (colour !== 'blue') {
      global.nukelist.push(`examplefurnituremod:${colour}_coloured_third_thing`)
    }
}*/

// To use these item nuking scripts, type the IDs of items you want to disable in the space above. 
// Then, type 'nukelist reload', which will run these commands: (this is a custom script as well)
// /kubejs reload startup-scripts
// /reload
// /kubejs reload lang

// Can nuke Items, Blocks, Fluids, Entities
 