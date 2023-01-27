/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {extendTheme} from '@chakra-ui/react'

import DefaultOverrides from './default'
import RefArchOverrides from './RefArch'
import RefArchGlobalOverrides from './RefArchGlobal'

export const DefaultTheme = extendTheme(DefaultOverrides)
export const RefArchTheme = extendTheme(RefArchOverrides)
export const RefArchGlobalTheme = extendTheme(RefArchGlobalOverrides)
