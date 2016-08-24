//https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Contributor_s_Guide/Private_Properties
import internal from '../internal';

class MediaAwareControllerBase
{
    constructor(mediaQueryFactory) {
        'ngInject';

        internal(this).mediaQueryFactory = mediaQueryFactory;
    }

    get currentMediaState() {
        return internal(this).mediaQueryFactory.getCurrentState();
    }
}

export default MediaAwareControllerBase;