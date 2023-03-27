import { useEffect, useState } from "react";
import { ComicData } from "../types/shared_types";

export const usePagination = (comicsData: ComicData[]) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productsPerPage] = useState<number>(15);
    const comics: ComicData[] = comicsData;

    useEffect(() => {
        setCurrentPage(1);
    }, [comics]);

    const indexOfLastComic: number = currentPage * productsPerPage;
    const indexOfFirstComic: number = indexOfLastComic - productsPerPage;
    const disableRightPagination: boolean = indexOfLastComic < comics.length;

    const currentComics: ComicData[] = comics.slice(
        indexOfFirstComic,
        indexOfLastComic
    );

    return {
        currentPage,
        setCurrentPage,
        disableRightPagination,
        indexOfFirstComic,
        indexOfLastComic,
        currentComics,
        comics
    };
};