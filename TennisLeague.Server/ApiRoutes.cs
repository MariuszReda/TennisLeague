namespace TennisLeague.Server
{
    public static class ApiRoutes
    {
        public const string Base = "api";

        public static class Matches
        {
            public const string BaseRoute = Base + "/matches";

            public const string GetAll = "";
            public const string Get = "{matchId}";
            public const string Update = "{matchId}";
            public const string Delete = "{matchId}";
        }

        public static class Players
        {
            public const string BaseRoute = Base + "/players";

            public const string GetAll = "";
            public const string Get = "{playerId}";
            public const string GetCurrent = "me";
        }

        public static class Table
        {
            public const string BaseRoute = Base + "/table";

            public const string GetTable = "";
            public const string Recalculate = "recalculate";
            public const string History = "history/{playerId}";
        }

        public static class Identity
        {
            public const string BaseRoute = Base + "/identity";

            public const string Login = "login";
            public const string Register = "register";
        }
    }

}
