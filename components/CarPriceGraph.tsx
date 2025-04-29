import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Image } from "expo-image";
import Svg, { Path, Line, Circle, Text as SvgText } from "react-native-svg";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

interface PriceItem {
  item: string;
  price: number;
}

interface CarPriceGraphProps {
  priceItems: PriceItem[];
}

// Sample chart data
const chartData = [
  8300, 7800, 8500, 7000, 6500, 7000, 8200, 6400, 6500, 7000, 6000,
];

const CarPriceGraph = ({ priceItems }: CarPriceGraphProps) => {
  const chartWidth = width - 40;
  const chartHeight = 180;
  const paddingLeft = 50;
  const paddingRight = 40;
  const paddingTop = 20;
  const paddingBottom = 30;
  const graphWidth = chartWidth - paddingLeft - paddingRight;
  const graphHeight = chartHeight - paddingTop - paddingBottom;

  const minValue = 6000;
  const maxValue = 9000;
  const valueRange = maxValue - minValue;

  const points = chartData.map((value, index) => {
    const x = paddingLeft + index * (graphWidth / (chartData.length - 1));
    const y =
      paddingTop +
      graphHeight -
      ((value - minValue) / valueRange) * graphHeight;
    return { x, y };
  });

  const generateSmoothPath = (points: { x: number; y: number }[]) => {
    if (points.length < 2) return "";
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      const controlX1 = current.x + (next.x - current.x) / 3;
      const controlY1 = current.y;
      const controlX2 = current.x + (2 * (next.x - current.x)) / 3;
      const controlY2 = next.y;
      path += ` C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${next.x} ${next.y}`;
    }
    return path;
  };

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>
          Powerful and sporty - The exterior
        </Text>
        <Text style={styles.subTitle}>
          For an even sportier look, opt for optional Design Packages.
        </Text>

        <Svg height={chartHeight} width={chartWidth}>
          {[0, 1, 2, 3].map((index) => {
            const y = paddingTop + (index * graphHeight) / 3;
            const value = 9 - index * 1;
            return (
              <React.Fragment key={`grid-${index}`}>
                <Line
                  x1={paddingLeft}
                  y1={y}
                  x2={paddingLeft + graphWidth}
                  y2={y}
                  stroke={"rgba(203, 213, 225, 0.5)"}
                  strokeWidth="1"
                  strokeDasharray="4"
                />
                <SvgText
                  x={paddingLeft-8}
                  y={y + 4}
                  fontSize="18"
                  fontFamily={appFonts.UrbanistMedium}
                  textAnchor="end"
                  fill={appColors.GreyScale[500]}
                >
                  {value * 1000}
                </SvgText>
              </React.Fragment>
            );
          })}

          {["90,000 km", "120,000 km", "150,000 km"].map((label, index) => {
            const x =  ((index+1) * graphWidth) / 9-paddingLeft;
            return (
              <SvgText
                key={`label-${index}`}
                x={x}
                y={chartHeight}
                fontSize="18"
                fontFamily={appFonts.UrbanistMedium}
                textAnchor="start"
                fill={appColors.GreyScale[500]}
              >
                {label}
              </SvgText>
            );
          })}

          <Path
            d={generateSmoothPath(points)}
            stroke="#5A50FF"
            strokeWidth="2.5"
            fill="none"
          />
        </Svg>
      </View>

      <View style={styles.metricsContainer}>
        <View style={styles.metricCard}>
          <View
            style={[
              styles.metricIconContainer,
              { backgroundColor: "rgba(90, 80, 255, 0.1)" },
            ]}
          >
            <Image
              source={require("@/assets/images/purchase/dollar-circle.png")}
              style={{ width: 20, height: 20, tintColor: "#5A50FF" }}
              contentFit="contain"
            />
          </View>
          <View style={styles.metricContent}>
            <Text style={styles.metricValue}>$75,340.00</Text>
            <Text style={styles.metricLabel}>Average sale</Text>
          </View>
        </View>

        <View style={styles.metricCard}>
          <View
            style={[
              styles.metricIconContainer,
              { backgroundColor: "rgba(34, 197, 94, 0.1)" },
            ]}
          >
            <Ionicons name="arrow-up" size={20} color="#22C55E" />
          </View>
          <View style={styles.metricContent}>
            <Text style={styles.metricValue}>$85,000.00</Text>
            <Text style={styles.metricLabel}>Highest price</Text>
          </View>
        </View>

        <View style={styles.metricCard}>
          <View
            style={[
              styles.metricIconContainer,
              { backgroundColor: "rgba(239, 68, 68, 0.1)" },
            ]}
          >
            <Ionicons name="arrow-down" size={20} color="#EF4444" />
          </View>
          <View style={styles.metricContent}>
            <Text style={styles.metricValue}>$65,000.00</Text>
            <Text style={styles.metricLabel}>Lowest price</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 100,
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: appFonts.UrbanistBold,
    marginBottom: 6,
    color: appColors.GreyScale[800],
  },
  subTitle: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
    marginBottom: 20,
  },
  chartContainer: {
    width: "50%",
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  metricsContainer: {
    width: "45%",
    marginTop: 36,
    gap: 12,
  },
  metricCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    backgroundColor: "#FFFFFF",
  },
  metricIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  metricContent: {
    flex: 1,
  },
  metricValue: {
    fontSize: 18,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[800],
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
  },
});

export default CarPriceGraph;
