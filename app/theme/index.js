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

const allSitesTheme = extendTheme(allSitesOverrides)
const refArchTheme = extendTheme(refArchOverrides)
const refArchGlobalTheme = extendTheme(refArchGlobalOverrides)

const RefArch = {...allSitesTheme, ...refArchTheme}
const RefArchGlobal = {...allSitesTheme, ...refArchGlobalTheme}

const themes = {
    default: allSitesTheme,
    RefArch,
    RefArchGlobal
}

export default themes
