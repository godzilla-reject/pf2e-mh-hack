Hooks.on('renderNPCSheetPF2e', async (_, html) => {
    // we look for the tab nav and inject a new tab entry
    const nav = html.find('.npc-body .sheet-tabs.tabs[data-group=primary]')
    nav.append('<a class="item " data-tab="custom">Custom</a>')

    // we look for the tabs and inject our rendered template in it
    const template = await renderTemplate('modules/monster-hunter-hack/templates/template.html')
    const tabs = html.find('.npc-body .sheet-body')
    tabs.append(template)
})