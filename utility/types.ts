type TypeInventory = {
    id?: string;
    name?: string;
};
type TypeDataToShare = {
    inventory?: TypeInventory[];
    oggettoInInventario?: TypeInventory;
    oggettoSelezionato?: TypeInventory;
    enigmiRisolti?: string[];

};

type DataApp = {
    data: TypeDataToShare;
    dispatch: React.Dispatch<any>;
};

type TypeHooks = {
    setOggettoSelezionato: React.Dispatch<React.SetStateAction<TypeInventory>>;
    setEnigmiRisolti: React.Dispatch<React.SetStateAction<string[]>>;
}

export type { DataApp, TypeDataToShare, TypeInventory, TypeHooks };