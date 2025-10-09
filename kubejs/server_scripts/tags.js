// Listen to item tag event
ServerEvents.tags('item', e => {
    e.removeAll('bountifulfares:walnut_logs')
    e.add('nomansland:walnut_logs', 'bountifulfares:walnut_log')
    e.add('nomansland:walnut_logs', 'bountifulfares:walnut_wood')
    e.add('nomansland:walnut_logs', 'bountifulfares:stripped_walnut_log')
    e.add('nomansland:walnut_logs', 'bountifulfares:stripped_walnut_wood')

    e.add('bountifulfares:plum_leaves', 'environmental:moody_plum_leaves')
    e.removeAll('bountifulfares:plum_logs')
    e.add('bountifulfares:plum_logs', 'environmental:plum_log')
    e.add('bountifulfares:plum_logs', 'environmental:plum_wood')
    e.add('bountifulfares:plum_logs', 'environmental:stripped_plum_log')
    e.add('bountifulfares:plum_logs', 'environmental:stripped_plum_wood')

    e.add('oddyssey:codexes', 'kubejs:gunmetal_codex')
    
  
})