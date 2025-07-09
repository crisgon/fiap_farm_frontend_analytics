import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/stores/redux/hooks";

function HomeComponent() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted/50 p-6">
      <p>Logado com: {user.email ?? "-"}</p>
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="flex flex-col items-center gap-2">
          <CardTitle>Analytics Dashboard</CardTitle>
          <CardDescription>
            Visualize os principais indicadores do sistema.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="sales">Vendas</TabsTrigger>
              <TabsTrigger value="users">Usuários</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span>Total de acessos</span>
                  <Badge variant="secondary">12.340</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Conversões</span>
                  <Badge variant="outline">1.234</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Taxa de rejeição</span>
                  <Badge variant="destructive">5,2%</Badge>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sales">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span>Vendas no mês</span>
                  <Badge variant="secondary">R$ 23.000</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Produtos vendidos</span>
                  <Badge variant="outline">430</Badge>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="users">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span>Novos usuários</span>
                  <Badge variant="secondary">320</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Usuários ativos</span>
                  <Badge variant="outline">1.200</Badge>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <div className="flex justify-end mt-6">
            <Button>Ver Relatório Completo</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export const Home = HomeComponent;
