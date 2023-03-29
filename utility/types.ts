type TypeInventory = {
    id?: string;
    name?: string;
};
type TypeDataToShare = {
    inventory: TypeInventory[];
    oggettoInInventario: TypeInventory;
    setOggettoInInventario: React.Dispatch<React.SetStateAction<TypeInventory>>;
};
type TypeData = {
    data: TypeDataToShare;
};


export type { TypeData, TypeDataToShare, TypeInventory };