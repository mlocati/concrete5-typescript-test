import * as $ from 'jquery';

(<any>window).ccm_enableUserProfileMenu = function() {
    let account = $('#ccm-account-menu');
    if (account.length) {
        let container = $('#ccm-account-menu-container');
        if (container.length === 0) {
			container = $('<div />').appendTo(document.body);
		}
        container.addClass('ccm-ui').attr('id', 'ccm-account-menu-container');
        $('#ccm-account-menu').appendTo(container);

        let documentHeight = $(document).height();
        let position = $('#ccm-account-menu').offset().top;

		if (documentHeight > 200 && (documentHeight - position) < 200) {
			$('#ccm-account-menu').addClass('dropup');
		}
    }
};
