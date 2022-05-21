//
// Copyright © 2020, 2021 Anticrm Platform Contributors.
// Copyright © 2021 Hardcore Engineering Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { Class, Ref } from '@anticrm/core'
import { IntlString, Plugin, plugin } from '@anticrm/platform'
import { RefInputActionItem } from './types'

/**
 * @public
 */
export const textEditorId = 'text-editor' as Plugin

export default plugin(textEditorId, {
  class: {
    RefInputActionItem: '' as Ref<Class<RefInputActionItem>>
  },
  string: {
    Suggested: '' as IntlString,
    NoItems: '' as IntlString,
    Attach: '' as IntlString,
    TextStyle: '' as IntlString,
    Emoji: '' as IntlString,
    GIF: '' as IntlString,
    EditorPlaceholder: '' as IntlString,
    Edit: '' as IntlString,
    Bold: '' as IntlString,
    Italic: '' as IntlString,
    Strikethrough: '' as IntlString,
    OrderedList: '' as IntlString,
    BulletedList: '' as IntlString,
    Blockquote: '' as IntlString,
    Code: '' as IntlString,
    CodeBlock: '' as IntlString
  }
})
