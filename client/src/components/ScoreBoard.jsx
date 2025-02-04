import "../styles.css";

export default function ScoreBoard() {
    return (
        <main>
            <header>
                <h1>ScoreBoard</h1>
            </header>
            <section>
                <section className="round-section">
                    <div className="round" id="round1">
                        <div className="points" id="points1-1"><p>-</p></div>
                        <div className="points" id="points1-2"></div>
                    </div>
                    <div className="round" id="round2">
                        <div className="points" id="points2-1"></div>
                        <div className="points" id="points2-2"></div>
                    </div>
                    <div className="round" id="round3">
                        <div className="points" id="points3-1"></div>
                        <div className="points" id="points3-2"></div>
                    </div>
                    <div className="round" id="round4">
                        <div className="points" id="points4-1"></div>
                        <div className="points" id="points4-2"></div>
                    </div>
                    <div className="round" id="round5">
                        <div className="points" id="points5-1"></div>
                        <div className="points" id="points5-2"></div>
                    </div>
                    <div className="round" id="round6">
                        <div className="points" id="points6-1"></div>
                        <div className="points" id="points6-2"></div>
                    </div>
                    <div className="round" id="round7">
                        <div className="points" id="points7-1"></div>
                        <div className="points" id="points7-2"></div>
                    </div>
                    <div className="round" id="round8">
                        <div className="points" id="points8-1"></div>
                        <div className="points" id="points8-2"></div>
                    </div>
                    <div className="round" id="round9">
                        <div className="points" id="points9-1"></div>
                        <div className="points" id="points9-2"></div>
                    </div>
                    <div className="round" id="round10">
                        <div className="points" id="points10-1"></div>
                        <div className="points" id="points10-2"></div>
                        <div className="points" id="points10-3"></div>
                    </div>
                </section>
                <section className="score-section">
                    <div className="round-score" id="score1"></div>
                    <div className="round-score" id="score2"></div>
                    <div className="round-score" id="score3"></div>
                    <div className="round-score" id="score4"></div>
                    <div className="round-score" id="score5"></div>
                    <div className="round-score" id="score6"></div>
                    <div className="round-score" id="score7"></div>
                    <div className="round-score" id="score8"></div>
                    <div className="round-score" id="score9"></div>
                    <div className="round-score" id="score10"></div>
                </section>
            </section>
        </main>
    );
}
