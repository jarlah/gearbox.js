import { Asset } from '@cognite/sdk/dist/src/types/types';

export const ASSET_DATA = {
  id: 4650652196144007,
  name: 'VAL',
  parentId: 6687602007296940,
  description: 'Valhall plattform',
  metadata: {
    SOURCE_DB: 'workmate',
    SOURCE_TABLE: 'wmate_dba.wmt_location',
    WMT_LOCATION_ID: '1004',
    WMT_LOCATION_WORKSTART: '1999-09-01 07:00:00',
    latestUpdateTimeSource: '1552471210000',
  },
  createdTime: 0,
  lastUpdatedTime: 1553076017185,
};

export const fakeAsset: Asset = {
  name: '23-TE-96148',
  parentId: 8515799768286580,
  description: 'VRD - PH 1STSTG COMP SEAL GAS HTR',
  metadata: {
    ELC_STATUS_ID: '1211',
    RES_ID: '532924',
    SOURCE_DB: 'workmate',
    SOURCE_TABLE: 'wmate_dba.wmt_tag',
    WMT_AREA_ID: '1600',
    WMT_CATEGORY_ID: '1116',
    WMT_CONTRACTOR_ID: '1686',
    WMT_FUNC_CODE_ID: '4564',
    WMT_LOCATION_ID: '1004',
    WMT_PO_ID: '8309',
    WMT_SAFETYCRITICALELEMENT_ID: '1060',
    WMT_SYSTEM_ID: '4440',
    WMT_TAG_CREATED_DATE: '2009-06-26 15:36:37',
    WMT_TAG_CRITICALLINE: 'N',
    WMT_TAG_DESC: 'VRD - PH 1STSTG COMP SEAL GAS HTR',
    WMT_TAG_GLOBALID: '1000000000682252',
    WMT_TAG_HISTORYREQUIRED: 'Y',
    WMT_TAG_ID: '346452',
    WMT_TAG_ID_ANCESTOR: '346633',
    WMT_TAG_ISACTIVE: '1',
    WMT_TAG_ISOWNEDBYPROJECT: '0',
    WMT_TAG_LOOP: '96148',
    WMT_TAG_MAINID: '681760',
    WMT_TAG_NAME: '23-TE-96148',
    WMT_TAG_UPDATED_BY: '8137',
    WMT_TAG_UPDATED_DATE: '2014-07-11 09:25:15',
  },
  id: 5156972057719,
  createdTime: new Date(0),
  lastUpdatedTime: new Date(0)
};
