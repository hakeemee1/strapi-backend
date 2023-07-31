'use strict';

/**
 * reviewed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reviewed.reviewed');
