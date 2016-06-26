using System;
using System.Collections.Generic;
using System.Configuration;
using LogisticsAPI.DataAccess;
using MySql.Data.MySqlClient;
using PortalIswintBE.Models.Entities;

namespace PortalIswintBE.Data
{
    public class Database:IDisposable
    {
        private readonly PortalIswintContext _context;
        private readonly MySqlConnection _connection;
        private bool _disposed;

        private Dictionary<string, object> _repositories;

        public Database()
        {
            _connection =
                new MySqlConnection(ConfigurationManager.ConnectionStrings["PortalIswintContext"].ConnectionString);
            _connection.Open();
            _context = new PortalIswintContext(_connection, false);
        }

        public Database(PortalIswintContext context)
        {
            _context = context;
        }


        public Repository<T> Repository<T>() where T : Entity
        {
            if (_repositories == null)
            {
                _repositories = new Dictionary<string, object>();
            }

            var type = typeof(T).Name;

            if (_repositories.ContainsKey(type)) return (Repository<T>) _repositories[type];

            var repositoryType = typeof(Repository<>);
            var repositoryInstance = Activator.CreateInstance(repositoryType.MakeGenericType(typeof(T)), _context,
                _connection);
            _repositories.Add(type, repositoryInstance);
            return (Repository<T>) repositoryInstance;
        }

        public Repository<T> Repo<T>() where T : Entity
        {
            return Repository<T>();
        }


        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        public virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                    _connection.Close();
                    _connection.Dispose();
                }
            }
            _disposed = true;
        }
    }
}