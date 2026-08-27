export type ShowStatus = 'confirmado' | 'em_breve';

export interface Show {
  data: string;
  local: string;
  cidade: string;
  status: ShowStatus;
  ingresso_url?: string;
  ingresso_texto?: string;
}

export interface HighlightShow {
  evento: string;
  cidade: string;
  data: string;
  local?: string;
  ingresso_url?: string;
  ingresso_texto?: string;
}

export interface ShowsApiResponse {
  shows: Show[];
  _instrucoes?: string;
  _exemplo?: Partial<Show>;
  _status_opcoes?: string;
}

export interface HighlightApiResponse {
  destaque: HighlightShow[];
  _instrucoes?: string;
  _exemplo?: Partial<HighlightShow>;
}
