export enum Exchange {
  NSE = 'NSE',
  BSE = 'BSE',
  BCD = 'BCD',
  MCX = 'MCX',
  CDS = 'CDS',
  NFO = 'NFO',
}

export enum Segment {
  BCD_OPT = 'BCD-OPT',
  BCD_FUT = 'BCD-FUT',
  BCD = 'BCD',
  BSE = 'BSE',
  INDICES = 'INDICES',
  CDS_OPT = 'CDS-OPT',
  CDS_FUT = 'CDS-FUT',
  MCX_FUT = 'MCX-FUT',
  MCX_OPT = 'MCX-OPT',
  NFO_OPT = 'NFO-OPT',
  NFO_FUT = 'NFO-FUT',
  NSE = 'NSE',
}

export enum InstrumentType {
  CE = 'CE',
  PE = 'PE',
  FUT = 'FUT',
  EQ = 'EQ',
}

export interface SearchInstrumentsRequest {
  instrument_token?: string[];
  exchange_token?: string[];
  tradingsymbol?: string[];
  name?: string[];
  last_price?: string[];
  expiry?: string[];
  strike?: string[];
  tick_size?: string[];
  lot_size?: string[];
  instrument_type?: InstrumentType[];
  segment?: Segment[];
  exchange?: Exchange[];
}

export interface FilterInstrumentsRequest extends SearchInstrumentsRequest {}

export interface SearchInstrumentsPatternRequest {
  tradingsymbol?: string;
  expiryRange?: {
    low: Date;
    high: Date;
  };
}

export interface PaginationDetails {
  offset?: number;
  limit?: number;
}

export interface SearchInstrumentsRequestV2 {
  filterInstrumentRequest?: FilterInstrumentsRequest;
  searchInstrumentsPatternRequest?: SearchInstrumentsPatternRequest;
  paginationDetails?: PaginationDetails;
  fieldsRequired?: InstrumentFields[];
  distinct?: boolean;
}

export interface DistinctFieldValuesRequest {
  fields: InstrumentFields[];
  searchInstrumentsRequestV2: SearchInstrumentsRequestV2;
}

export enum InstrumentFields {
  INSTRUMENT_TOKEN = 'instrument_token',
  EXCHANGE_TOKEN = 'exchange_token',
  TRADING_SYMBOL = 'tradingsymbol',
  NAME = 'name',
  LAST_PRICE = 'last_price',
  EXPIRY = 'expiry',
  STRIKE = 'strike',
  TICK_SIZE = 'tick_size',
  LOT_SIZE = 'lot_size',
  INSTRUMENT_TYPE = 'instrument_type',
  SEGMENT = 'segment',
  EXCHANGE = 'exchange',
}
