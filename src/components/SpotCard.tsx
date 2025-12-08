import React from 'react';

interface SpotSafety {
    best: string;
    good: string;
    caution: string;
    dangerous: string;
}

interface SpotCardProps {
    spotId: number;
    spotName: string;
    safety: SpotSafety;
}

const SpotCard: React.FC<SpotCardProps> = ({ spotId, spotName, safety }) => {
    // Construct the iframe URL with all necessary parameters
    const params = [
        `s=${spotId}`,
        "m=100",
        `uid=wg_fwdg_${spotId}_100_${Date.now()}`,
        "ai=0",
        "wj=knots",
        "tj=c",
        "waj=m",
        "tij=cm",
        "odh=0",
        "doh=24",
        "fhours=240",
        "hrsm=2",
        "vt=forecasts",
        "lng=en",
        "idbs=1",
        "p=WINDSPD,GUST,SMER,TMPE,FLHGT,CDC,APCP1s,RATING"
    ];

    const iframeSrc = `https://www.windguru.cz/widget-fcst-iframe.php?${params.join("&")}`;

    return (
        <div className="spot-card">
            <h2>{spotName}</h2>
            <div className="widget-container">
                <iframe
                    src={iframeSrc}
                    title={`Forecast for ${spotName}`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ minHeight: '350px' }}
                />
            </div>

            <div className="safety-info">
                <div className="safety-item best">
                    <span className="label">Best:</span> {safety.best}
                </div>
                <div className="safety-item good">
                    <span className="label">Good:</span> {safety.good}
                </div>
                <div className="safety-item caution">
                    <span className="label">Caution:</span> {safety.caution}
                </div>
                <div className="safety-item dangerous">
                    <span className="label">Dangerous:</span> {safety.dangerous}
                </div>
            </div>
        </div>
    );
};

export default SpotCard;
