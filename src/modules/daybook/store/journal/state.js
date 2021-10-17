"use strict"

export default() => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Sunt ut excepteur veniam laboris minim sit magna sint proident proident labore. Labore elit exercitation fugiat fugiat veniam dolor amet culpa ullamco nisi cupidatat et sunt labore. Dolore enim qui enim amet. Nostrud aute voluptate ad pariatur officia adipisicing laboris sunt commodo in. Incididunt eu dolore Lorem aliqua qui elit nulla elit elit esse nulla labore. Quis adipisicing exercitation irure minim ex ex.",
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: "Minim non cillum eu est voluptate cillum qui. Consectetur sit ad enim consectetur amet culpa exercitation do duis enim et. Deserunt ipsum cupidatat duis cillum qui id ullamco esse officia culpa elit. Laborum dolore sunt occaecat commodo consectetur reprehenderit.",
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: "Ea aliquip voluptate eiusmod pariatur voluptate. In ut dolore id anim sunt excepteur ullamco. Exercitation Lorem voluptate nostrud duis consectetur pariatur cupidatat exercitation eiusmod reprehenderit do eu occaecat eu. Nulla cillum proident et non qui cillum proident. In tempor est pariatur tempor.",
            picture: null,
        }
    ]
})