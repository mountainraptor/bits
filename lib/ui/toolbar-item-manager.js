/**
Copyright 2017 LGS Innovations

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

(() => {
  'use strict';

  const CrudManager = require('./../helpers/crud-manager');

  class ToolbarItemManager extends CrudManager {
    constructor() {
      super('base#ToolbarItems', {readScopes: ['public']});
    }

    load(messageCenter) {
      return Promise.resolve()
      .then(() => super.load(messageCenter))
      .then(() => this.create({
        primary: {
          href: '/elements/base-toolbar/base-toolbar-modules.html',
          tag: 'base-toolbar-modules'
        }
      }))
      .then(() => this.create({
        primary: {
          href: '/elements/base-toolbar/base-toolbar-notifications.html',
          tag: 'base-toolbar-notifications'
        }
      }));
    }
  }

  module.exports = ToolbarItemManager;
})();
