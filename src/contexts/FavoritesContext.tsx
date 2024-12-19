import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface FavoritesContextType {
    favorites: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType>({
    favorites: [],
    addFavorite: () => { },
    removeFavorite: () => { },
    isFavorite: () => false
});

interface FavoritesProviderProps {
    children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
    // Récupérer les favoris depuis le localStorage au chargement
    const [favorites, setFavorites] = useState<string[]>(() => {
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    // Sauvegarder les favoris dans le localStorage à chaque modification
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (id: string) => {
        setFavorites((prev) => [...prev, id]);
    };

    const removeFavorite = (id: string) => {
        setFavorites((prev) => prev.filter((favId) => favId !== id));
    };

    const isFavorite = (id: string) => {
        return favorites.includes(id);
    };

    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = (): FavoritesContextType => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};
