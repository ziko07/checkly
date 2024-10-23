/**
* This is a Checkly CLI BrowserCheck construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#browsercheck
*/

import { BrowserCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'
import {websiteGroup} from "./website-group.check";

new BrowserCheck('life-rapidfire', {
  name: 'life_rapidfire',
  activated: true,
  muted: false,
  shouldFail: false,
  runParallel: true,
  locations: [],
  group: websiteGroup,
  tags: [],
  sslCheckDomain: '',
  frequency: Frequency.EVERY_10M,
  environmentVariables: [],
 // group: your check belongs to group 'SmartFinancial.com',
  code: {
    entrypoint: './life-rapidfire.spec.ts',
  },
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    baseBackoffSeconds: 60,
    maxRetries: 2,
    maxDurationSeconds: 600,
    sameRegion: true,
  }),
})
