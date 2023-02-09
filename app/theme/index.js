/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {extendTheme} from '@chakra-ui/react'

import allSitesOverrides from './allSites'
import refArchOverrides from './RefArch'
import refArchGlobalOverrides from './RefArchGlobal'

const refArchTheme = {...allSitesOverrides, ...refArchOverrides}
const refArchGlobalTheme = {...allSitesOverrides, ...refArchGlobalOverrides}

const allSitesTheme = extendTheme(allSitesOverrides)
const RefArch = extendTheme(refArchTheme)
const RefArchGlobal = extendTheme(refArchGlobalTheme)

const themes = {
    default: allSitesTheme,
    RefArch,
    RefArchGlobal
}

export default themes
