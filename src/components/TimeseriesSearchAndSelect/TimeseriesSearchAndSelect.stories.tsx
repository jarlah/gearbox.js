import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as sdk from '@cognite/sdk';
import { TimeseriesSearchAndSelect } from './TimeseriesSearchAndSelect';
import { assetsList, timeseriesList } from '../../mocks';

const timeseriesNames = timeseriesList.map(ts => ts.name);
const timeseriesIds = timeseriesList.map(ts => ts.id);
const infoText = `Names you can search for : ${timeseriesNames.join(', ')}.`;

// Mock the SDK calls
sdk.Assets.list = async (
  input: sdk.AssetListParams
): Promise<sdk.AssetDataWithCursor> => {
  action('sdk.Assets.list')(input);
  return {
    items: assetsList.map(
      (a: sdk.Asset): sdk.Asset => {
        return {
          id: Number.parseInt(a.id.toString(), 10),
          name: a.name,
          description: a.description,
        };
      }
    ),
  };
};

sdk.TimeSeries.search = async (
  input: sdk.TimeseriesSearchParams
): Promise<sdk.TimeseriesWithCursor> => {
  action('sdk.TimeSeries.search')(input);
  if (!input.query) {
    return {
      items: timeseriesList,
    };
  }
  return {
    items: timeseriesList.filter(
      // @ts-ignore
      ts => ts.name.toUpperCase().indexOf(input.query.toUpperCase()) >= 0
    ),
  };
};

const filterRule = (timeseries: sdk.Timeseries): boolean =>
  !timeseries.isString;

const onTimeserieSelectionChange = (
  newTimeseries: number[],
  timeseries: sdk.Timeseries
) => {
  action('onTimeserieSelectionChange')(newTimeseries, timeseries);
};

storiesOf('TimeseriesSearchAndSelect', module)
  .add(
    'Basic',
    () => (
      <TimeseriesSearchAndSelect
        onTimeserieSelectionChange={onTimeserieSelectionChange}
      />
    ),
    {
      info: {
        text: infoText,
      },
    }
  )
  .add(
    'Single selection',
    () => (
      <TimeseriesSearchAndSelect
        onTimeserieSelectionChange={onTimeserieSelectionChange}
        single={true}
      />
    ),
    {
      info: {
        text: infoText,
      },
    }
  )
  .add(
    'Allow strings',
    () => (
      <TimeseriesSearchAndSelect
        onTimeserieSelectionChange={onTimeserieSelectionChange}
        allowStrings={true}
      />
    ),
    {
      info: {
        text: infoText,
      },
    }
  )
  .add(
    'Preselected',
    () => (
      <TimeseriesSearchAndSelect
        onTimeserieSelectionChange={onTimeserieSelectionChange}
        selectedTimeseries={[timeseriesIds[1], timeseriesIds[3]]}
      />
    ),
    {
      info: {
        text: infoText,
      },
    }
  )
  .add(
    'Custom filter rule',
    () => (
      <TimeseriesSearchAndSelect
        onTimeserieSelectionChange={onTimeserieSelectionChange}
        filterRule={filterRule}
      />
    ),
    {
      info: {
        text: `const filterRule = (timeseries: sdk.Timeseries) : boolean =>
      !timeseries.isString;`,
      },
    }
  );