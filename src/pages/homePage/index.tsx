import { styled } from '@mui/material/styles';
import { Container, Box, Typography, TextField, Button, Link, Grid, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faIdCardAlt,
  faUserCheck,
  faClipboardList,
  faFileInvoiceDollar,
  faChartBar,
  faBuilding,
  faClock,
  faMoon
} from '@fortawesome/free-solid-svg-icons';
const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(4),
}));

const LeftSide = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    display: 'none', // Ocultar em telas menores
  },
}));

const RightSide = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[8],
  backgroundColor: theme.palette.background.paper, // Fundo do cartão de login
  width: '100%',
  maxWidth: 400, // Largura máxima da seção de login
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: theme.palette.primary.light,
}));

const SignInTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5),
}));


export function HomePage() {
  return (
    <StyledContainer>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item md={5}>
        <LeftSide>
  <Box display="flex" alignItems="center" marginBottom={4}>
    <FontAwesomeIcon icon={faIdCardAlt} color="#1976d2" style={{ marginRight: 8, fontSize: '1.25rem' }} />
    <Typography variant="h6" color="primary">Sistema de Credenciamento</Typography>
  </Box>
  
  <FeatureItem>
    <FeatureIcon><FontAwesomeIcon icon={faUserCheck} /></FeatureIcon>
    <Box>
      <Typography variant="subtitle1">Controle de Acesso</Typography>
      <Typography variant="body2" color="textSecondary">
        Registro preciso de entrada e saída de todos os participantes com data e hora.
      </Typography>
    </Box>
  </FeatureItem>

  <FeatureItem>
    <FeatureIcon><FontAwesomeIcon icon={faClipboardList} /></FeatureIcon>
    <Box>
      <Typography variant="subtitle1">Gestão de Pessoas</Typography>
      <Typography variant="body2" color="textSecondary">
        Cadastro completo de participantes, funcionários e empresas com filtros avançados.
      </Typography>
    </Box>
  </FeatureItem>

  <FeatureItem>
    <FeatureIcon><FontAwesomeIcon icon={faFileInvoiceDollar} /></FeatureIcon>
    <Box>
      <Typography variant="subtitle1">Emissão de Notas</Typography>
      <Typography variant="body2" color="textSecondary">
        Geração automática de notas fiscais para empresas e prestadores de serviço.
      </Typography>
    </Box>
  </FeatureItem>

  <FeatureItem>
    <FeatureIcon><FontAwesomeIcon icon={faChartBar} /></FeatureIcon>
    <Box>
      <Typography variant="subtitle1">Relatórios Completos</Typography>
      <Typography variant="body2" color="textSecondary">
        Exportação de dados em múltiplos formatos para análise de fluxo e frequência.
      </Typography>
    </Box>
  </FeatureItem>

  <FeatureItem>
    <FeatureIcon><FontAwesomeIcon icon={faBuilding} /></FeatureIcon>
    <Box>
      <Typography variant="subtitle1">Gestão por Empresa</Typography>
      <Typography variant="body2" color="textSecondary">
        Controle de credenciamento por empresa com lista de funcionários autorizados.
      </Typography>
    </Box>
  </FeatureItem>

  <FeatureItem>
    <FeatureIcon><FontAwesomeIcon icon={faClock} /></FeatureIcon>
    <Box>
      <Typography variant="subtitle1">Controle de Jornada</Typography>
      <Typography variant="body2" color="textSecondary">
        Registro de horas trabalhadas por funcionário com cálculos automáticos.
      </Typography>
    </Box>
  </FeatureItem>
</LeftSide>
        </Grid>
        <Grid item xs={12} md={5}>
          <RightSide>
            <Box display="flex" justifyContent="flex-end">
              <Button variant="outlined" size="small" color="inherit" startIcon={<FontAwesomeIcon icon={faMoon} />}>
                Dark
              </Button>
            </Box>
            <SignInTitle variant="h5">Sign in</SignInTitle>
            <StyledTextField label="Email" variant="outlined" fullWidth />
            <StyledTextField label="Senha" type="password" variant="outlined" fullWidth />
            <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
            </Box>
            <StyledButton variant="contained" color="primary" fullWidth>
              Login
            </StyledButton>
            <Box mt={3} textAlign="center">
              <Typography variant="body2" color="textSecondary">
                Ainda não é cadastrado ? <Link href="#" color="primary">Cadastre-se</Link>
              </Typography>
            </Box>
          </RightSide>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}