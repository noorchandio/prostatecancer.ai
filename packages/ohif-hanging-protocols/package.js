Package.describe({
    name: 'ohif:hanging-protocols',
    summary: 'Support functions for using DICOM Hanging Protocols',
    version: '0.0.1'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4');

    api.use('ecmascript');
    api.use('standard-app-packages');
    api.use('jquery');
    api.use('stylus');
    api.use('random');
    api.use('templating');
    api.use('natestrauser:select2@4.0.1', 'client');
    api.use('iron:router@1.0.13');
    api.use('momentjs:moment');
    api.use('validatejs');

    // Our custom packages
    api.use('ohif:viewerbase');

    api.addAssets('assets/dots.svg', 'client');

    // Both client & server
    api.addFiles('both/namespace.js');
    api.addFiles('both/collections.js');
    api.addFiles('both/schema.js');
    api.addFiles('both/hardcodedData.js');
    api.addFiles('both/testData.js');

    // Client-only
    api.addFiles('client/collections.js', 'client');
    api.addFiles('client/protocolEngine.js', 'client');
    api.addFiles('client/helpers/displayConstraint.js', 'client');
    api.addFiles('client/helpers/attributes.js', 'client');
    api.addFiles('client/protocolStore/protocolStore.js', 'client');
    api.addFiles('client/protocolStore/defaultStrategy.js', 'client');

    // UI Components
    api.addFiles('client/components/previousPatientButton/previousPatientButton.html', 'client');
    api.addFiles('client/components/previousPatientButton/previousPatientButton.js', 'client');

    api.addFiles('client/components/feedbackButton/feedbackButton.html', 'client');
    api.addFiles('client/components/feedbackButton/feedbackButton.js', 'client');

    api.addFiles('client/components/nextPatientButton/nextPatientButton.html', 'client');
    api.addFiles('client/components/nextPatientButton/nextPatientButton.js', 'client');

    api.addFiles('client/components/matchedProtocols/matchedProtocols.html', 'client');
    api.addFiles('client/components/matchedProtocols/matchedProtocols.styl', 'client');
    api.addFiles('client/components/matchedProtocols/matchedProtocols.js', 'client');

    api.addFiles('client/components/protocolEditor/protocolEditor.html', 'client');
    api.addFiles('client/components/protocolEditor/protocolEditor.styl', 'client');
    api.addFiles('client/components/protocolEditor/protocolEditor.js', 'client');

    api.addFiles('client/components/ruleTable/ruleTable.html', 'client');
    api.addFiles('client/components/ruleTable/ruleTable.styl', 'client');
    api.addFiles('client/components/ruleTable/ruleTable.js', 'client');

    api.addFiles('client/components/ruleEntryDialog/ruleEntryDialog.html', 'client');
    api.addFiles('client/components/ruleEntryDialog/ruleEntryDialog.styl', 'client');
    api.addFiles('client/components/ruleEntryDialog/ruleEntryDialog.js', 'client');

    api.addFiles('client/components/settingEntryDialog/settingEntryDialog.html', 'client');
    api.addFiles('client/components/settingEntryDialog/settingEntryDialog.styl', 'client');
    api.addFiles('client/components/settingEntryDialog/settingEntryDialog.js', 'client');

    api.addFiles('client/components/textEntryDialog/textEntryDialog.html', 'client');
    api.addFiles('client/components/textEntryDialog/textEntryDialog.styl', 'client');
    api.addFiles('client/components/textEntryDialog/textEntryDialog.js', 'client');

    api.addFiles('client/components/settingsTable/settingsTable.html', 'client');
    api.addFiles('client/components/settingsTable/settingsTable.styl', 'client');
    api.addFiles('client/components/settingsTable/settingsTable.js', 'client');

    api.addFiles('client/components/stageDetails/stageDetails.html', 'client');
    api.addFiles('client/components/stageDetails/stageDetails.styl', 'client');
    api.addFiles('client/components/stageDetails/stageDetails.js', 'client');

    api.addFiles('client/components/stageSortable/stageSortable.html', 'client');
    api.addFiles('client/components/stageSortable/stageSortable.styl', 'client');
    api.addFiles('client/components/stageSortable/stageSortable.js', 'client');

    // Server-only
    api.addFiles('server/collections.js', 'server');

    // Global exports
    api.export('HP');
});
