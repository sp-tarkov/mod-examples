export class ConfigsModelBase {
	db: ConfigsModelDb;
	config: ConfigModel;
}

export class ConfigsModelDb {
	moredb: ConfigsModelMoreDb;
	config: ConfigModel;
}

export class ConfigsModelMoreDb {
	config: ConfigModel;
}

export class ConfigModel {
	myProperty: string;
}
