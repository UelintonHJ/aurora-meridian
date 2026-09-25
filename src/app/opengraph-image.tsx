import { ImageResponse } from "next/og";

export const alt = "Aurora Meridian — Beyond the Market Radar";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "64px",
                    background: "#080A0D",
                    color: "#f4f1ea",
                    fontFamily: "Arial",
                    position: "relative",
                    overflow: "hidden",
                }}>
                <div
                    style={{
                        position: "absolute",
                        right: "-80px",
                        top: "70px",
                        width: "520px",
                        height: "520px",
                        border: "1px solid rgba(200,169,107,0.28)",
                        borderRadius: "50%",
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        right: "10px",
                        top: "160px",
                        width: "340px",
                        height: "340px",
                        border: "1px solid rgba(200,169,107,0.18)",
                        borderRadius: "50%",
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        right: "70px",
                        top: "230px",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#D7FF63",
                        boxShadow: "0 0 24px rgba(215,255,99,0.65)",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            fontSize: "20px",
                            fontWeight: 600,
                            letterSpacing: "0.14em",
                            color: "#C8A96B",
                        }}
                    >
                        AURORA MERIDIAN
                    </div>

                    <div
                        style={{
                            display: "flex",
                            fontSize: "15px",
                            letterSpacing: "0.12em",
                            color: "#7f8793",
                        }}
                    >
                        INVESTMENT MANAGEMENT
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: "760px",
                        gap: "20px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            fontFamily: "Georgia",
                            fontSize: "76px",
                            lineHeight: 0.92,
                            letterSpacing: "-0.04em",
                            fontWeight: 400,
                        }}
                    >
                        <span>Beyond the</span>

                        <span
                            style={{
                                color: "#e4d2a6",
                                fontStyle: "italic",
                            }}
                        >
                            market radar.
                        </span>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            maxWidth: "640px",
                            fontSize: "24px",
                            lineHeight: 1.4,
                            color: "#a8adb5",
                        }}
                    >
                        Capital for opportunities beyond the traditional
                        market radar.
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        fontSize: "14px",
                        letterSpacing: "0.1em",
                        color: "#7f8793",
                    }}
                >
                    <span>FICTIONAL PORTFOLIO CASE</span>

                    <span>BEYOND THE MARKET RADAR</span>
                </div>
            </div>
        ),
        {
            ...size,
        },
    );
}