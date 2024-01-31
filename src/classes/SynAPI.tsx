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
 * @see https://docs.synopticdata.com/services/time-series
 */
export class SynAPI {
  
  /**
   * @property TOKEN
   * @description The Synoptic API token
   */
  private static TOKEN: string = process.env.REACT_APP_SYN_TOKEN || '';

  /**
   * @property API_URL
   * @description The Synoptic API URL
   */
  private static API_URL: string = 'https://api.synopticdata.com/v2/stations/timeseries';

  /**
   * Converts the date to UTC and
   * outputs it in the synoptic API format:
   * YYYYmmddHHMM
   * @param date 
   */
  private static dateToSynFormat(date: Date): string {
    return date.getUTCFullYear().toString() +
      (date.getUTCMonth() + 1).toString().padStart(2, '0') +
      date.getUTCDate().toString().padStart(2, '0') +
      date.getUTCHours().toString().padStart(2, '0') +
      date.getUTCMinutes().toString().padStart(2, '0');
  }
  
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
                        settings: UnitSettings): IStationData | null {
    // Convert dates to strings with format YYYYmmddHHMM

    const url: string = this.API_URL + 
      "?token=" + this.TOKEN;

    return null; // TODO: change return type of function
  }
}