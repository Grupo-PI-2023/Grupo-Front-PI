export type Arquivo = {
	id?: string;
	idEvento?: string;
	idTipoArquivo?: string;
	// tipo: string;
	// usuario: string;
	// areas: string;
	eventId?: string;
	InicioSubmissao?: string,
	FinalSubmissao?: string,
	InicioAvaliacao?: null | Date,
	FinalAvaliacao?: null | Date,
	NormasPublicacao?: string,
	ModeloArquivo?: string,
	ModeloApresentacao?: string,
	Apresentacao?: boolean
};
export interface ISalaRepository {
	create(Arquivo: Arquivo): Promise<Arquivo>;
	read(): Promise<Arquivo[]>;
	readSala(id: string): Promise<Arquivo | null>;
	update(Arquivo: Arquivo): Promise<Arquivo>;
	delete(id: string): Promise<Arquivo>;
}
