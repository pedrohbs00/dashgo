import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false
});

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xasix: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    }
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};

const series = [
  {
    name: "series1",
    data: [
      {
        x: new Date("2012-05-14").toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit"
        }),
        y: 31
      },
      {
        x: new Date("2022-05-15").toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit"
        }),
        y: 120
      },
      {
        x: new Date("2022-05-16").toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit"
        }),
        y: 10
      },
      {
        x: new Date("2022-05-17").toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit"
        }),
        y: 28
      },
      {
        x: new Date("2022-05-18").toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit"
        }),
        y: 61
      },
      {
        x: new Date("2022-05-19").toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit"
        }),
        y: 18
      },
      {
        x: new Date("2022-05-20").toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit"
        }),
        y: 109
      }
    ]
  }
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
