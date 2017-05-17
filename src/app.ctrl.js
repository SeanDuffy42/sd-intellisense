(function () {
	'use strict';

	angular.module('app')
	.controller('appCtrl', [function(){
		var appCtrl = this;

		appCtrl.sugestions =  ["ALTER TABLE",
								"AND",
								"AS",
								"BETWEEN",
								"CREATE DATABASE",
								"CREATE INDEX",
								"CREATE TABLE",
								"CREATE VIEW",
								"DELETE",
								"DROP DATABASE",
								"DROP INDEX",
								"DROP TABLE",
								"EXISTS",
								"FULL JOIN",
								"GROUP BY",
								"HAVING",
								"IN",
								"INNER JOIN",
								"INSERT INTO",
								"LEFT JOIN",
								"LIKE",
								"OR",
								"ORDER BY",
								"RIGHT JOIN",
								"SELECT",
								"SELECT DISTINCT",
								"SELECT INTO",
								"SELECT TOP",
								"TRUNCATE TABLE",
								"UNION",
								"UNION ALL",
								"UPDATE",
								"WHERE",
								"SUM"];
	}]);

})();