async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

    // Иницилиазируем карту
    const mapPC = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map-pc'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [ 37.592869, 55.758564],

                // Уровень масштабирования
                zoom: 17
            }
        }
    );
    mapPC.addChild(new YMapDefaultSchemeLayer());
    mapPC.addChild(new YMapDefaultFeaturesLayer());
    const mapMobile = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map-mobile'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [ 37.592869, 55.758564],

                // Уровень масштабирования
                zoom: 17
            }
        }
    );
    mapMobile.addChild(new YMapDefaultSchemeLayer());
    mapMobile.addChild(new YMapDefaultFeaturesLayer());
    const mapMobile2 = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map-mobile2'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [ 37.592869, 55.758564],

                // Уровень масштабирования
                zoom: 17
            }
        }
    );
    mapMobile2.addChild(new YMapDefaultSchemeLayer());
    mapMobile2.addChild(new YMapDefaultFeaturesLayer());

    const markerPCElement = document.createElement('div');
    markerPCElement.className = 'marker-class';

    const markerMobileElement = document.createElement('div');
    markerMobileElement.className = 'marker-class';

    const markerMobile2Element = document.createElement('div');
    markerMobile2Element.className = 'marker-class';
    
    const markerPC = new YMapMarker(
    {
        // source: 'markerSource',
        coordinates: [37.592869, 55.758564],
        mapFollowsOnDrag: true,
    },
    markerPCElement
    );
    const markerMobile = new YMapMarker(
        {
            // source: 'markerSource',
            coordinates: [37.592869, 55.758564],
            mapFollowsOnDrag: true,
        },
        markerMobileElement
        );
    const markerMobile2 = new YMapMarker(
        {
            // source: 'markerSource',
            coordinates: [37.592869, 55.758564],
            mapFollowsOnDrag: true,
        },
        markerMobile2Element
        );
    
    mapPC.addChild(markerPC);
    mapMobile.addChild(markerMobile);
    mapMobile2.addChild(markerMobile2);
}