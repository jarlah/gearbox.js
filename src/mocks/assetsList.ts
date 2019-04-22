import { Asset } from '@cognite/sdk';
import { AdvancedSearch } from '../interfaces';

export const vmateDba = 'wmate_dba.wmt_location';
export const randomTime = '1999-09-01 07:00:00';
export const valDescription = 'Valhall plattform';
export const gasCompressionString = 'GAS COMPRESSION AND RE-INJECTION (PH)';
export const wmtag = 'wmate_dba.wmt_tag';

export const SKA: Asset = {
  id: 8129784932439587,
  path: [8129784932439587],
  name: 'SKA',
  description: 'Skarv',
  metadata: {
    SOURCE_DB: 'workmate',
    SOURCE_TABLE: vmateDba,
    WMT_LOCATION_ACTIVE: 'Y',
    WMT_LOCATION_CODE: 'SKA',
    WMT_LOCATION_EXTENDACTIVEWOP: '4',
    WMT_LOCATION_EXTERNALOWNERSHIP: 'Y',
    WMT_LOCATION_ID: '1010',
    WMT_LOCATION_MAITIS: 'Y',
    WMT_LOCATION_NAME: 'Skarv',
    WMT_LOCATION_NOCOPIESDEFAULTIC: '4',
    WMT_LOCATION_NOCOPIESWOPERMIT: '1',
    WMT_LOCATION_OPERATIONHOURS: '12',
    WMT_LOCATION_SIMULATETIMEFRAME: '60',
    WMT_LOCATION_SJAMAXNOOFTASKS: '99',
    WMT_LOCATION_USEPLOTALTITUDE: 'Y',
    WMT_LOCATION_WORKSTART: randomTime,
  },
};

export const IAA: Asset = {
  id: 7793176078609329,
  path: [7793176078609329],
  name: 'IAA',
  description: 'IAA Root node',
  metadata: {
    ASSETSCOPENAME: 'IAA',
    DESCRIPTION: 'IAA Root node',
    NAME: 'IAA',
    PARENTUID: '',
    SOURCE: 'Valid',
    SOURCEID: 'Valid.dbo.AkerBP_UNION_ALL_TAG',
    SOURCE_DB: 'valid',
    SOURCE_TABLE: 'iaaassethierarchy',
    TYPE: 'AssetHierarchy',
    UID: 'IAA',
  },
};

export const VAL: Asset = {
  id: 3623339785663936,
  path: [3623339785663936],
  name: 'VAL',
  description: valDescription,
  metadata: {
    SOURCE_DB: 'workmate',
    SOURCE_TABLE: vmateDba,
    WMT_LOCATION_ACTIVE: 'Y',
    WMT_LOCATION_CODE: 'VAL',
    WMT_LOCATION_EXTENDACTIVEWOP: '4',
    WMT_LOCATION_EXTERNALOWNERSHIP: 'Y',
    WMT_LOCATION_ID: '1004',
    WMT_LOCATION_MAITIS: 'Y',
    WMT_LOCATION_NAME: valDescription,
    WMT_LOCATION_NOCOPIESDEFAULTIC: '2',
    WMT_LOCATION_NOCOPIESWOPERMIT: '2',
    WMT_LOCATION_OPERATIONHOURS: '12',
    WMT_LOCATION_PROGVALUE: 'wmt_location_weudefaultlocation',
    WMT_LOCATION_SIMULATETIMEFRAME: '15',
    WMT_LOCATION_SJAMAXNOOFTASKS: '99',
    WMT_LOCATION_USEPLOTALTITUDE: 'Y',
    WMT_LOCATION_WORKSTART: randomTime,
  },
};

export const SearchValue: AdvancedSearch = {
  name: '20-PA-001A',
  description: 'Crude pump',
  metadata: [
    { id: 1, key: 'manifacturer', value: 'FRAMO' },
    { id: 2, key: 'manifacturer2', value: 'TESLA' },
  ],
};

export const assetsList = [SKA, IAA, VAL];

export const ASSET_ZERO_DEPTH_ARRAY: Asset[] = [
  {
    id: 6687602007296940,
    path: [6687602007296940],
    depth: 0,
    name: 'Aker BP',
    description: 'Aker BP',
    createdTime: 0,
    lastUpdatedTime: 0,
  },
  {
    id: 2675073401706610,
    path: [2675073401706610],
    depth: 0,
    name: 'VAL',
    description: valDescription,
    metadata: {
      SOURCE_DB: 'workmate',
      SOURCE_TABLE: vmateDba,
      WMT_LOCATION_ACTIVE: 'Y',
      WMT_LOCATION_CODE: 'VAL',
      WMT_LOCATION_EXTENDACTIVEWOP: '4',
      WMT_LOCATION_EXTERNALOWNERSHIP: 'Y',
      WMT_LOCATION_ID: '1004',
      WMT_LOCATION_MAITIS: 'Y',
      WMT_LOCATION_NAME: valDescription,
      WMT_LOCATION_NOCOPIESDEFAULTIC: '2',
      WMT_LOCATION_NOCOPIESWOPERMIT: '2',
      WMT_LOCATION_OPERATIONHOURS: '12',
      WMT_LOCATION_PROGVALUE: 'wmt_location_weudefaultlocation',
      WMT_LOCATION_SIMULATETIMEFRAME: '15',
      WMT_LOCATION_SJAMAXNOOFTASKS: '99',
      WMT_LOCATION_USEPLOTALTITUDE: 'Y',
      WMT_LOCATION_WORKSTART: randomTime,
    },
    createdTime: 1534854951557,
    lastUpdatedTime: 1534854951557,
  },
];

export const ASSET_LIST_CHILD: Asset[] = [
  {
    id: 3111454725058294,
    path: [6687602007296940, 4650652196144007, 3111454725058294],
    depth: 2,
    name: '23',
    parentId: 4650652196144007,
    description: gasCompressionString,
    metadata: {
      SOURCE_DB: 'workmate',
      SOURCE_TABLE: 'wmate_dba.wmt_system',
      WMT_LOCATION_ID: '1004',
      WMT_SYSTEM_ACTIVE: 'Y',
      WMT_SYSTEM_CODE: '23',
      WMT_SYSTEM_DESC: gasCompressionString,
      WMT_SYSTEM_ID: '4440',
      WMT_SYSTEM_NAME: gasCompressionString,
    },
    createdTime: 0,
    lastUpdatedTime: 0,
  },
  {
    id: 4518112062673878,
    path: [
      6687602007296940,
      4650652196144007,
      3111454725058294,
      6895991969886325,
      4518112062673878,
    ],
    depth: 4,
    name: '23-1ST STAGE COMPRESSION-PH',
    parentId: 6895991969886325,
    description: '1ST STAGE COMPRESSION ON PH',
    metadata: {
      ELC_STATUS_ID: '1211',
      SOURCE_DB: 'workmate',
      SOURCE_TABLE: wmtag,
      WMT_AREA_ID: '1444',
      WMT_CATEGORY_ID: '1157',
      WMT_FUNC_CODE_ID: '6593',
      WMT_LOCATION_ID: '1004',
      WMT_SYSTEM_ID: '4440',
      WMT_TAG_CREATED_DATE: '2012-12-13 10:14:56',
      WMT_TAG_CRITICALLINE: 'N',
      WMT_TAG_DESC: '1ST STAGE COMPRESSION ON PH',
      WMT_TAG_GLOBALID: '1000000000249676',
      WMT_TAG_HISTORYREQUIRED: 'Y',
      WMT_TAG_ID: '681792',
      WMT_TAG_ID_ANCESTOR: '681760',
      WMT_TAG_ISACTIVE: '1',
      WMT_TAG_ISOWNEDBYPROJECT: '0',
      WMT_TAG_MAINID: '681760',
      WMT_TAG_NAME: '23-1ST STAGE COMPRESSION-PH',
      WMT_TAG_STATUSCHGDATE: randomTime,
      WMT_TAG_UPDATED_BY: '8137',
      WMT_TAG_UPDATED_DATE: randomTime,
    },
    createdTime: 0,
    lastUpdatedTime: 0,
  },
  {
    id: 7372310232665628,
    path: [
      6687602007296940,
      4650652196144007,
      3111454725058294,
      6895991969886325,
      4518112062673878,
      7372310232665628,
    ],
    depth: 5,
    name: '23-1ST STAGE COMPRESSOR-PH',
    parentId: 4518112062673878,
    description: '1ST STAGE COMPRESSOR ON PH',
    metadata: {
      ELC_STATUS_ID: '1211',
      SOURCE_DB: 'workmate',
      SOURCE_TABLE: wmtag,
      WMT_AREA_ID: '1444',
      WMT_CATEGORY_ID: '1157',
      WMT_FUNC_CODE_ID: '6593',
      WMT_LOCATION_ID: '1004',
      WMT_SYSTEM_ID: '4440',
      WMT_TAG_CREATED_DATE: '2012-12-13 10:17:23',
      WMT_TAG_CRITICALLINE: 'N',
      WMT_TAG_DESC: '1ST STAGE COMPRESSOR ON PH',
      WMT_TAG_GLOBALID: '1000000000249708',
      WMT_TAG_HISTORYREQUIRED: 'Y',
      WMT_TAG_ID: '681824',
      WMT_TAG_ID_ANCESTOR: '681792',
      WMT_TAG_ISACTIVE: '1',
      WMT_TAG_ISOWNEDBYPROJECT: '0',
      WMT_TAG_MAINID: '681760',
      WMT_TAG_NAME: '23-1ST STAGE COMPRESSOR-PH',
      WMT_TAG_STATUSCHGDATE: '2013-05-08 12:52:29',
      WMT_TAG_UPDATED_BY: '8137',
      WMT_TAG_UPDATED_DATE: randomTime,
    },
    createdTime: 0,
    lastUpdatedTime: 0,
  },
  {
    id: 5786472304680477,
    path: [
      6687602007296940,
      4650652196144007,
      3111454725058294,
      6895991969886325,
      5786472304680477,
    ],
    depth: 4,
    name: '23-2ND STAGE COMPRESSION-PH',
    parentId: 6895991969886325,
    description: '2ND STAGE COMPRESSION ON PH',
    metadata: {
      ELC_STATUS_ID: '1211',
      SOURCE_DB: 'workmate',
      SOURCE_TABLE: wmtag,
      WMT_AREA_ID: '1444',
      WMT_CATEGORY_ID: '1157',
      WMT_FUNC_CODE_ID: '6593',
      WMT_LOCATION_ID: '1004',
      WMT_SYSTEM_ID: '4440',
      WMT_TAG_CREATED_DATE: '2012-12-13 10:14:58',
      WMT_TAG_CRITICALLINE: 'N',
      WMT_TAG_DESC: '2ND STAGE COMPRESSION ON PH',
      WMT_TAG_GLOBALID: '1000000000249678',
      WMT_TAG_HISTORYREQUIRED: 'Y',
      WMT_TAG_ID: '681794',
      WMT_TAG_ID_ANCESTOR: '681760',
      WMT_TAG_ISACTIVE: '1',
      WMT_TAG_ISOWNEDBYPROJECT: '0',
      WMT_TAG_MAINID: '681760',
      WMT_TAG_NAME: '23-2ND STAGE COMPRESSION-PH',
      WMT_TAG_STATUSCHGDATE: randomTime,
      WMT_TAG_UPDATED_BY: '8137',
      WMT_TAG_UPDATED_DATE: randomTime,
    },
    createdTime: 0,
    lastUpdatedTime: 0,
  },
  {
    id: 4074033093163622,
    path: [
      6687602007296940,
      4650652196144007,
      3111454725058294,
      6895991969886325,
      5786472304680477,
      4074033093163622,
    ],
    depth: 5,
    name: '23-2ND STAGE COMPRESSOR-PH',
    parentId: 5786472304680477,
    description: '2ND STAGE COMPRESSOR ON PH',
    metadata: {
      ELC_STATUS_ID: '1211',
      SOURCE_DB: 'workmate',
      SOURCE_TABLE: wmtag,
      WMT_AREA_ID: '1444',
      WMT_CATEGORY_ID: '1157',
      WMT_FUNC_CODE_ID: '6593',
      WMT_LOCATION_ID: '1004',
      WMT_SYSTEM_ID: '4440',
      WMT_TAG_CREATED_DATE: '2012-12-13 10:17:23',
      WMT_TAG_CRITICALLINE: 'N',
      WMT_TAG_DESC: '2ND STAGE COMPRESSOR ON PH',
      WMT_TAG_GLOBALID: '1000000000249709',
      WMT_TAG_HISTORYREQUIRED: 'Y',
      WMT_TAG_ID: '681825',
      WMT_TAG_ID_ANCESTOR: '681794',
      WMT_TAG_ISACTIVE: '1',
      WMT_TAG_ISOWNEDBYPROJECT: '0',
      WMT_TAG_MAINID: '681760',
      WMT_TAG_NAME: '23-2ND STAGE COMPRESSOR-PH',
      WMT_TAG_STATUSCHGDATE: '2013-05-08 12:52:29',
      WMT_TAG_UPDATED_BY: '8137',
      WMT_TAG_UPDATED_DATE: '2013-12-11 14:35:29',
    },
    createdTime: 0,
    lastUpdatedTime: 0,
  },
  {
    id: 8327962938361538,
    path: [
      6687602007296940,
      4650652196144007,
      3111454725058294,
      6895991969886325,
      1150715783816357,
      8327962938361538,
    ],
    depth: 5,
    name: '23-TIC-92604B',
    parentId: 1150715783816357,
    description: 'SOFT TAG VRD - PH 1STSTGDISCCOOL GAS OUT',
    metadata: {
      ELC_STATUS_ID: '1211',
      SOURCE_DB: 'workmate',
      SOURCE_TABLE: wmtag,
      WMT_AREA_ID: '1444',
      WMT_CATEGORY_ID: '1152',
      WMT_CONTRACTOR_ID: '1686',
      WMT_FUNC_CODE_ID: '11275',
      WMT_LOCATION_ID: '1004',
      WMT_SYSTEM_ID: '4440',
      WMT_TAG_COMMENT:
        'CHANGED FROM 23-TIC-92604 TO 23-TIC-92604B ON 4/21/2012 (REF: VRD-FEM-002839).',
      WMT_TAG_CREATED_DATE: '2013-05-16 11:50:16',
      WMT_TAG_CRITICALLINE: 'N',
      WMT_TAG_DESC: 'SOFT TAG VRD - PH 1STSTGDISCCOOL GAS OUT',
      WMT_TAG_GLOBALID: '1000000000291969',
      WMT_TAG_HISTORYREQUIRED: 'Y',
      WMT_TAG_ID: '698803',
      WMT_TAG_ID_ANCESTOR: '691243',
      WMT_TAG_ISACTIVE: '1',
      WMT_TAG_ISOWNEDBYPROJECT: '0',
      WMT_TAG_MAINID: '681760',
      WMT_TAG_NAME: '23-TIC-92604B',
      WMT_TAG_UPDATED_BY: '1001',
      WMT_TAG_UPDATED_DATE: '2015-10-09 11:56:30',
    },
    createdTime: 0,
    lastUpdatedTime: 0,
  },
  {
    id: 1150715783816357,
    path: [
      6687602007296940,
      4650652196144007,
      3111454725058294,
      6895991969886325,
      1150715783816357,
    ],
    depth: 4,
    name: '23-TT-92604B',
    parentId: 6895991969886325,
    description: 'VRD - PH 1STSTGDISCCOOL COOLMED IN',
    metadata: {
      ELC_STATUS_ID: '1212',
      SOURCE_DB: 'workmate',
      SOURCE_TABLE: wmtag,
      WMT_AREA_ID: '1444',
      WMT_CATEGORY_ID: '1116',
      WMT_CONTRACTOR_ID: '1686',
      WMT_FUNC_CODE_ID: '4580',
      WMT_LOCATION_ID: '1004',
      WMT_SAFETYCRITICALELEMENT_ID: '1060',
      WMT_SYSTEM_ID: '4440',
      WMT_TAG_COMMENT: 'Added Units: ?C (Ref: VRD-CCR-000505)',
      WMT_TAG_CREATED_DATE: '2013-02-08 13:18:34',
      WMT_TAG_CRITICALLINE: 'N',
      WMT_TAG_DESC: 'VRD - PH 1STSTGDISCCOOL COOLMED IN',
      WMT_TAG_GLOBALID: '1000000000269189',
      WMT_TAG_HISTORYREQUIRED: 'Y',
      WMT_TAG_ID: '691243',
      WMT_TAG_ID_ANCESTOR: '681760',
      WMT_TAG_ISACTIVE: '0',
      WMT_TAG_ISOWNEDBYPROJECT: '0',
      WMT_TAG_LOOP: '92604',
      WMT_TAG_MAINID: '681760',
      WMT_TAG_NAME: '23-TT-92604B',
      WMT_TAG_STATUSCHGDATE: '2014-07-05 13:43:26',
      WMT_TAG_UPDATED_BY: '1001',
      WMT_TAG_UPDATED_DATE: '2015-10-08 08:48:23',
    },
    createdTime: 0,
    lastUpdatedTime: 0,
  },
  {
    id: 53231887945301,
    path: [
      6687602007296940,
      4650652196144007,
      3111454725058294,
      6895991969886325,
      4518112062673878,
      53231887945301,
    ],
    depth: 5,
    name: '23-VG-9101',
    parentId: 4518112062673878,
    description: 'VRD - 1ST STAGE SUCTION SCRUBBER',
    metadata: {
      ELC_STATUS_ID: '1211',
      RES_ID: '531331',
      SOURCE_DB: 'workmate',
      SOURCE_TABLE: wmtag,
      WMT_AREA_ID: '1585',
      WMT_CATEGORY_ID: '1120',
      WMT_CONTRACTOR_ID: '1686',
      WMT_FUNC_CODE_ID: '6330',
      WMT_LOCATION_ID: '1004',
      WMT_PO_ID: '8309',
      WMT_SYSTEM_ID: '4440',
      WMT_TAG_COMMENT:
        'Capacity: 55.3 m3, Size: 3.34m ID x 5.2m T/T, Operating conditions: 3.4 barg @ 40?C',
      WMT_TAG_CREATED_DATE: '2009-06-26 15:36:37',
      WMT_TAG_CRITICALLINE: 'N',
      WMT_TAG_DESC: 'VRD - 1ST STAGE SUCTION SCRUBBER',
      WMT_TAG_GLOBALID: '1000000000716797',
      WMT_TAG_HISTORYREQUIRED: 'Y',
      WMT_TAG_ID: '346867',
      WMT_TAG_ID_ANCESTOR: '681792',
      WMT_TAG_ISACTIVE: '1',
      WMT_TAG_ISOWNEDBYPROJECT: '0',
      WMT_TAG_MAINID: '681760',
      WMT_TAG_NAME: '23-VG-9101',
      WMT_TAG_UPDATED_BY: '1001',
      WMT_TAG_UPDATED_DATE: '2015-10-08 15:05:08',
    },
    createdTime: 0,
    lastUpdatedTime: 0,
  },
  {
    id: 2513266419866445,
    path: [
      6687602007296940,
      4650652196144007,
      3111454725058294,
      6895991969886325,
      4518112062673878,
      2513266419866445,
    ],
    depth: 5,
    name: '23-XX-9105',
    parentId: 4518112062673878,
    description: 'VRD - 1ST STAGE SUCTION/DISCHARGE COOLER SKID',
    metadata: {
      ELC_STATUS_ID: '1211',
      SOURCE_DB: 'workmate',
      SOURCE_TABLE: wmtag,
      WMT_AREA_ID: '1585',
      WMT_CATEGORY_ID: '1120',
      WMT_CONTRACTOR_ID: '1686',
      WMT_FUNC_CODE_ID: '6340',
      WMT_LOCATION_ID: '1004',
      WMT_PO_ID: '8309',
      WMT_SYSTEM_ID: '4440',
      WMT_TAG_COMMENT:
        'Weight excludes Mechanical Equipment, Size: 14.55m x 7.68m x 11.0m',
      WMT_TAG_CREATED_DATE: '2009-06-26 15:36:37',
      WMT_TAG_CRITICALLINE: 'N',
      WMT_TAG_DESC: 'VRD - 1ST STAGE SUCTION/DISCHARGE COOLER SKID',
      WMT_TAG_GLOBALID: '1000000000717626',
      WMT_TAG_HISTORYREQUIRED: 'Y',
      WMT_TAG_ID: '346905',
      WMT_TAG_ID_ANCESTOR: '681792',
      WMT_TAG_ISACTIVE: '1',
      WMT_TAG_ISOWNEDBYPROJECT: '0',
      WMT_TAG_MAINID: '681760',
      WMT_TAG_NAME: '23-XX-9105',
      WMT_TAG_UPDATED_BY: '1001',
      WMT_TAG_UPDATED_DATE: '2015-10-08 15:05:08',
    },
    createdTime: 0,
    lastUpdatedTime: 0,
  },
  {
    id: 6895991969886325,
    path: [
      6687602007296940,
      4650652196144007,
      3111454725058294,
      6895991969886325,
    ],
    depth: 3,
    name: '230900',
    parentId: 3111454725058294,
    description: 'GAS COMPRESSION AND RE-INJECTION ON PH',
    metadata: {
      ELC_STATUS_ID: '1211',
      SOURCE_DB: 'workmate',
      SOURCE_TABLE: wmtag,
      WMT_AREA_ID: '1444',
      WMT_CATEGORY_ID: '1157',
      WMT_FUNC_CODE_ID: '6593',
      WMT_LOCATION_ID: '1004',
      WMT_SYSTEM_ID: '4440',
      WMT_TAG_CREATED_DATE: '2012-12-13 10:07:51',
      WMT_TAG_CRITICALLINE: 'N',
      WMT_TAG_DESC: 'GAS COMPRESSION AND RE-INJECTION ON PH',
      WMT_TAG_GLOBALID: '1000000000249646',
      WMT_TAG_HISTORYREQUIRED: 'Y',
      WMT_TAG_ID: '681760',
      WMT_TAG_ISACTIVE: '1',
      WMT_TAG_ISOWNEDBYPROJECT: '0',
      WMT_TAG_MAINID: '681760',
      WMT_TAG_NAME: '230900',
      WMT_TAG_STATUSCHGDATE: '2013-05-08 12:52:26',
      WMT_TAG_UPDATED_BY: '8137',
      WMT_TAG_UPDATED_DATE: '2013-12-11 14:35:29',
    },
    createdTime: 0,
    lastUpdatedTime: 0,
  },
  {
    id: 6687602007296940,
    path: [6687602007296940],
    depth: 0,
    name: 'Aker BP',
    description: 'Aker BP',
    createdTime: 0,
    lastUpdatedTime: 0,
  },
  {
    id: 2675073401706610,
    path: [2675073401706610],
    depth: 0,
    name: 'VAL',
    description: valDescription,
    metadata: {
      SOURCE_DB: 'workmate',
      SOURCE_TABLE: vmateDba,
      WMT_LOCATION_ACTIVE: 'Y',
      WMT_LOCATION_CODE: 'VAL',
      WMT_LOCATION_EXTENDACTIVEWOP: '4',
      WMT_LOCATION_EXTERNALOWNERSHIP: 'Y',
      WMT_LOCATION_ID: '1004',
      WMT_LOCATION_MAITIS: 'Y',
      WMT_LOCATION_NAME: valDescription,
      WMT_LOCATION_NOCOPIESDEFAULTIC: '2',
      WMT_LOCATION_NOCOPIESWOPERMIT: '2',
      WMT_LOCATION_OPERATIONHOURS: '12',
      WMT_LOCATION_PROGVALUE: 'wmt_location_weudefaultlocation',
      WMT_LOCATION_SIMULATETIMEFRAME: '15',
      WMT_LOCATION_SJAMAXNOOFTASKS: '99',
      WMT_LOCATION_USEPLOTALTITUDE: 'Y',
      WMT_LOCATION_WORKSTART: randomTime,
    },
    createdTime: 1534854951557,
    lastUpdatedTime: 1534854951557,
  },
  {
    id: 4650652196144007,
    path: [6687602007296940, 4650652196144007],
    depth: 1,
    name: 'VAL',
    parentId: 6687602007296940,
    description: valDescription,
    metadata: {
      SOURCE_DB: 'workmate',
      SOURCE_TABLE: vmateDba,
      WMT_LOCATION_ACTIVE: 'Y',
      WMT_LOCATION_CODE: 'VAL',
      WMT_LOCATION_EXTENDACTIVEWOP: '4',
      WMT_LOCATION_EXTERNALOWNERSHIP: 'Y',
      WMT_LOCATION_ID: '1004',
      WMT_LOCATION_MAITIS: 'Y',
      WMT_LOCATION_NAME: valDescription,
      WMT_LOCATION_NOCOPIESDEFAULTIC: '2',
      WMT_LOCATION_NOCOPIESWOPERMIT: '2',
      WMT_LOCATION_OPERATIONHOURS: '12',
      WMT_LOCATION_PROGVALUE: 'wmt_location_weudefaultlocation',
      WMT_LOCATION_SIMULATETIMEFRAME: '15',
      WMT_LOCATION_SJAMAXNOOFTASKS: '99',
      WMT_LOCATION_USEPLOTALTITUDE: 'Y',
      WMT_LOCATION_WORKSTART: randomTime,
      latestUpdateTimeSource: '1554109208000',
    },
    createdTime: 0,
    lastUpdatedTime: 1554714020329,
  },
];
