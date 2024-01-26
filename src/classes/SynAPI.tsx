/**
 * Settings for units of measurement in the Synoptic API
 */
export type UnitSettings = {
  temp: 'C' | 'F' | 'K';
  speed: 'mph' | 'kph';
  pres: 'in' | 'mm';
  height: 'ft' | 'm';
  precip: 'in' | 'mm' | 'cm';
  alti: 'pa' | 'inhg';
}

/**
 * @type WindDir
 * @description The wind direction
 */
export type WindDir = 'N' | 'NNE' | 'NE' | 'ENE' | 
                       'E' | 'ESE' | 'SE' | 'SSE' | 
                       'S' | 'SSW' | 'SW' | 'WSW' | 
                       'W' | 'WNW' | 'NW' | 'NNW';

/**
 * @interface IStationData
 * @description Time series data from a weather station.
 * All arrays are the same length and in the same order.
 * If a measurement is not available at this station, the value is null.
 * @property units The units of measurement
 * @property stationID The station ID
 * @property stationName The station name
 * @property times Times of the measurements
 * @property temps Temperatures
 * @property windSpeeds Average wind speeds
 * @property windDirs Prevailing wind directions
 * @property windGusts Maximum wind gusts
 * @property SWEs Snow water equivalents for snow on the ground
 * @property snowDepths Snow depths
 * @property SWEIntervals Snow water equivalents for new snow in each interval
 * @property snowIntervals New snow depths in each interval
 * @property relHumids Relative humidities
 * @property lwRads Incoming longwave radiation; average over interval
 * @property swRads Incoming shortwave radiation; average over interval
 * @property snowTemps Snow temperatures
 */
export interface IStationData {
  units: UnitSettings;
  stationID: string;
  stationName: string;
  times: Date[];
  temps: number[] | null;
  windSpeeds: number[] | null;
  windDirs: WindDir[] | null;
  windGusts: number[] | null;
  SWEs: number[] | null;
  snowDepths: number[] | null;
  SWEIntervals: number[] | null;
  snowIntervals: number[] | null;
  relHumids: number[] | null;
  lwRads: number[] | null;
  swRads: number[] | null;
  snowTemps: number[] | null;
}

/**
 * @class SynAPI
 * @description Gets weather station data from the synoptic API
 */
export class SynAPI {
  
  /**
   * @property TOKEN
   * @description The Synoptic API token
   */
  private static TOKEN: string = process.env.REACT_APP_SYN_TOKEN || '';

  /**
   * @function convertSynData
   * @description Converts data from the synoptic API to the IStationData format
   * @param data The data from the synoptic API
   * @param settings The units of measurement
   */
  private static convertSynData(data: any, settings: UnitSettings): IStationData | null {
    return null; // TODO: change return type of function
  }

  /**
   * @method getStationData
   * @description Gets weather station data from the synoptic API
   * @param start The start date
   * @param end The end date
   * @param stationID The station ID
   */
  static getStationData(start: Date, 
                        end: Date, 
                        stationID: string, 
                        settings: UnitSettings) {

  }
}